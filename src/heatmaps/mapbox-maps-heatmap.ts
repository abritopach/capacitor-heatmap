import html2canvas from "html2canvas";
import type { GeoJSONSource } from "mapbox-gl";

import { Logs } from "../constants/constants";
import { Log } from "../log";
import type { HeatmapGradient, MapboxHeatmapOptions, MapboxHeatmapData, MapboxHeatmapCoordinate, MapBoxHeatmapPoint } from '../models/models';

import { BaseHeatmap } from './base-heatmap';

export class MapboxMapsHeatmap extends BaseHeatmap {

    static readonly DEFAULT_GRADIENT: HeatmapGradient = {
        0: 'rgba(33,102,172,0)',
        0.2: 'rgb(0, 0, 255)',
        0.4: 'rgb(0,255,255)',
        0.6: 'rgb(0, 255, 0)',
        0.8: 'rgb(255,255,0)',
        1: 'rgb(255,0,0)'
    };

    _map!: mapboxgl.Map;
    _data: MapboxHeatmapData = [];
    _opacity!: number;
    _gradient!: HeatmapGradient;
    _radius!: number;
    _max!: number;

    initialize(options: MapboxHeatmapOptions): mapboxgl.Map {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.initialize}`);

        this._map = options.map;
        console.log('map', this._map);

        this._data = typeof options.data !== 'undefined' ? options.data :
        (
            this._heatmapLogger.warn(`${Logs.heatmaps.mapbox} Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function.`),
            []
        );

        if (this._map) {
            this._addHeatmapLayer2Map();
        }

        return this._map;

    }

    destroy(): void {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.destroy}`);
        this._map.remove();
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: MapboxHeatmapData): MapboxHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.setData}`, data);
        this._data = [];
        this._data = [...data];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    getData(): MapboxHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.getData}`);
        return this._data;
    }

    getValueAt(coordinate: MapboxHeatmapCoordinate): number | null {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.getValueAt}`, coordinate);
        let value = null;
        const latSearched = Array.isArray(coordinate) ? coordinate[0] : coordinate.lat;
        const longSearched = Array.isArray(coordinate) ? coordinate[1] : coordinate.long;
        this._data.forEach(d => {
            const lat = Array.isArray(d) ? d[0] : d.lat;
            const long = Array.isArray(d) ? d[1] : d.long;
            const thickness = Array.isArray(d) ? d[2] : d.thickness;
            if ((lat === latSearched) && (long === longSearched)) {
                value = thickness;
            }
        });
        return value;
    }

    clearData(): MapboxHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.clearData}`);
        this._data = [];
        const source = this._map.getSource('heatmap-data') as GeoJSONSource;
        source.setData(
            {
            type: "FeatureCollection",
            features: [{
                type: "Feature",
                properties: {},
                geometry: {
                    type: "Point",
                    coordinates: [ 0, 0 ]
                }
            }]
            }
        );
        return this._data;
    }

    addPoint(point: MapBoxHeatmapPoint): MapboxHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.addPoint}`, {newPoint: point});
        this._data.push(point);
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    setMax(max: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.setMax}`, max);
        this._max = max;
        return this._max;
    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: MapboxHeatmapData}): boolean {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.draw}`, options);
        if (!this._map) { return false; }

        this._data = typeof options.data !== 'undefined' ? options.data : this._data;
        console.log('data', this._data);

        const features = this._data.map(d => {
            return { type: "Feature", properties: {}, geometry: { type: "Point", coordinates: d } } as GeoJSON.Feature;
        });

        if (this._map.loaded()) {
            this._addDataToSource(features);
        }

        this._map.on('load', () => {
            this._addDataToSource(features);
        });

        return true;
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): {newWidth: number, newHeight: number} {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.resize}`, options);
        const container = this._map.getContainer();
        container.style.width = options.width + 'px';
        container.style.height = options.height + 'px';
        this._map.resize();
        return {newWidth: options.width, newHeight: options.height};
    }

    gradient(grad: HeatmapGradient): HeatmapGradient {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.gradient}`, grad);
        this._gradient = grad;
        const gradColors: (string | number)[] = [];
        Object.entries(grad).sort().forEach(([key, value]) => {
            gradColors.push(parseFloat(key));
            gradColors.push(value);
        });
        this._map.setPaintProperty('heatmap-gradient-layer', 'heatmap-color',
        ['interpolate', ['linear'], ['heatmap-density'], ...gradColors]);
        return this._gradient;
    }

    opacity(opa: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.opacity}`, opa);
        this._opacity = opa;
        this._map.setPaintProperty(
            'heatmap-gradient-layer',
            'heatmap-opacity',
            opa
        );
        return this._opacity;
    }

    radius(rad: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.radius}`, rad);
        this._radius = rad;
        this._map.setPaintProperty(
            'heatmap-gradient-layer',
            'heatmap-radius',
            {
                stops: [
                    [0, 5],
                    [2, 10],
                    [9, 20],
                    [15, 50],
                ]
            }
        );
        return this._radius;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    async getDataURL(type: string, imageQuality: number): Promise<string> {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.getDataUrl}`, type, imageQuality);
        try {
            const canvas = await html2canvas(this._map.getContainer(), {
                useCORS: true
            });
            return canvas.toDataURL(type, imageQuality);
        } catch (error: unknown) {
            return (error as Error).message.toString();
        }
    }

    /*********/
    // Private methods.
    /*********/

    private _addDataToSource(features: GeoJSON.Feature[]) {
        const source = this._map.getSource('heatmap-data') as GeoJSONSource;
        source.setData(
            {
                type: "FeatureCollection",
                features: features
            }
        );
    }

    private _addHeatmapLayer2Map() {

        this._map.on('load', () => {

            // Add data source.
            this._map.addSource('heatmap-data', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            });

            const gradColors: (string | number)[] = [];
            Object.entries(MapboxMapsHeatmap.DEFAULT_GRADIENT).sort().forEach(([key, value]) => {
                gradColors.push(parseFloat(key));
                gradColors.push(value);
            });

            // Add data gradient layer.
            this._map.addLayer({
                id: 'heatmap-gradient-layer',
                type: 'heatmap',
                source: 'heatmap-data',
                maxzoom: 15,
                paint: {
                    // Increase the heatmap color weight weight by zoom level
                    // heatmap-intensity is a multiplier on top of heatmap-weight
                    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 15, 5],
                    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                    // Begin color ramp at 0-stop with a 0-transparancy color
                    // to create a blur-like effect.
                    'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], ...gradColors],
                    // Adjust the heatmap radius by zoom level
                    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 15, 20],
                    // Transition from heatmap to circle layer by zoom level
                    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 15, 1, 20, 0]
                }
            },
            'waterway-label'
            );

            // Add data point layer.
            this._map.addLayer({
                id: 'heatmap-point-layer',
                type: 'circle',
                source: 'heatmap-data',
                minzoom: 15,
                paint: {
                    // Circles have a radius of 1px at zoom level 8, a radius of 6px at zoom level 11,
                    // and a radius of 40px at zoom level 16.
                    /*
                    'circle-radius': {
                        stops: [[8, 1], [11, 6], [16, 40]]
                    },
                    "circle-radius": ["interpolate",["exponential", 2],["zoom"],0, 0,   20,200]
                    */
                    'circle-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 15, 20],
                    'circle-color': 'black',
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    // Transition from heatmap to circle layer by zoom level
                    'circle-opacity': ['interpolate', ['linear'], ['zoom'], 15, 1, 20, 0]
                }
            },
            'waterway-label'
            );

        });

    }

}