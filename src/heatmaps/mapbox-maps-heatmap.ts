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
    _canvas!: HTMLCanvasElement;
    _data: MapboxHeatmapData = [];
    _circle!: HTMLCanvasElement;
    _gradArray!: Uint8ClampedArray;
    _r!: number;
    _opacity!: number;
    _gradient!: HeatmapGradient;
    _radius!: number;
    _max!: number;
    _ctx!: CanvasRenderingContext2D;
    _width!: number;
    _height!: number;

    initialize(options: MapboxHeatmapOptions): HTMLCanvasElement {
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

        return this._canvas;

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
        // TODO: Not implemented yet.
        return 0;

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
        // TODO: Not implemented yet.
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.resize}`, options);
        return {newWidth: 0, newHeight: 0};
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
        // TODO: Not implemented yet.
        return 0;
    }

    radius(rad: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.radius}`, rad);
        // TODO: Not implemented yet.
        return 0;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): string {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.getDataUrl}`, type, imageQuality);
        // TODO: Not implemented yet.
        return '';
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
                maxzoom: 9,
                paint: {
                    // Increase the heatmap color weight weight by zoom level
                    // heatmap-intensity is a multiplier on top of heatmap-weight
                    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
                    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                    // Begin color ramp at 0-stop with a 0-transparancy color
                    // to create a blur-like effect.
                    'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], ...gradColors],
                    // Adjust the heatmap radius by zoom level
                    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
                    // Transition from heatmap to circle layer by zoom level
                    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
                }
            },
            'waterway-label'
            );

            // Add ddata point layer.
            this._map.addLayer({
                'id': 'heatmap-point-layer',
                'type': 'circle',
                'source': 'heatmap-data',
                'minzoom': 7,
                'paint': {
                    // Size circle radius by earthquake magnitude and zoom level
                    'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4], 16, ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]],
                    // Color circle by earthquake magnitude
                    'circle-color': ['interpolate',['linear'], ['get', 'mag'], 1, 'rgba(33,102,172,0)', 2, 'rgb(103,169,207)', 3, 'rgb(209,229,240)', 4, 'rgb(253,219,199)', 5, 'rgb(239,138,98)', 6, 'rgb(178,24,43)'],
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    // Transition from heatmap to circle layer by zoom level
                    'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1]
                }
            },
            'waterway-label'
            );

        });

    }

}