import { Logs } from "../constants/constants";
import { Log } from "../log";
import type { HeatmapGradient, HeatmapData, MapboxHeatmapOptions, HeatmapPoint} from '../models/models';

import { BaseHeatmap } from './base-heatmap';

export class MapboxMapsHeatmap extends BaseHeatmap {

    static readonly DEFAULT_GRADIENT: HeatmapGradient = {
        0.4: 'rgb(0, 0, 255)',
        0.6: 'rgb(0,255,255)',
        0.7: 'rgb(0, 255, 0)',
        0.8: 'rgba(244, 227, 0, 1)',
        1.0: 'rgb(178,24,43)'
    };

    _map!: mapboxgl.Map;
    _canvas!: HTMLCanvasElement;
    _data: HeatmapData = [];
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
        this._heatmapLogger.log(`${Logs.mapbox} initialize`);

        this._map = options.map;
        console.log('map', this._map);

        this._data = typeof options.data !== 'undefined' ? options.data :
        (
            this._heatmapLogger.warn(`${Logs.mapbox} Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function.`),
            []
        );

        if (this._map) {
            this._addHeatmapLayer2Map();
        }

        return this._canvas;

    }

    destroy(): void {
        this._heatmapLogger.log(`${Logs.mapbox} destroy`);
        this._map.remove();
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: HeatmapData): HeatmapData {
        this._heatmapLogger.log(`${Logs.mapbox} setData`, data);
        this._data = [];
        this._data = [...data];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    getData(): HeatmapData {
        this._heatmapLogger.log(`${Logs.mapbox} getData`);
        return this._data;
    }

    getValueAt(coordinate: []): number | null {
        this._heatmapLogger.log(`${Logs.mapbox} getValueAt`, coordinate);
                // TODO: Not implemented yet.
        return null;
    }

    clearData(): HeatmapData {
        this._heatmapLogger.log(`${Logs.mapbox} clearData`);
        // TODO: Not implemented yet.
        return [];
    }

    addPoint(point: HeatmapPoint): HeatmapData {
        this._heatmapLogger.log(`${Logs.mapbox} addPoint`, {newPoint: point});
        // TODO: Not implemented yet.
        return [];
    }

    setMax(max: number): number {
        this._heatmapLogger.log(`${Logs.mapbox} max`, max);
        // TODO: Not implemented yet.
        return 0;

    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: HeatmapData}): boolean {
        this._heatmapLogger.log(`${Logs.mapbox} draw`, options);
        if (!this._map) { return false; }

        this._data = typeof options.data !== 'undefined' ? options.data : this._data;

        console.log('data', this._data);

        return true;
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): {newWidth: number, newHeight: number} {
        // TODO: Not implemented yet.
        this._heatmapLogger.log(`${Logs.mapbox} resize`, options);
        return {newWidth: 0, newHeight: 0};
    }

    gradient(grad: HeatmapGradient): HeatmapGradient {
        this._heatmapLogger.log(`${Logs.mapbox} gradient`, grad);
        // TODO: Not implemented yet.
        return {};
    }

    opacity(opa: number): number {
        this._heatmapLogger.log(`${Logs.mapbox} opacity`, opa);
        // TODO: Not implemented yet.
        return 0;
    }

    radius(rad: number): number {
        this._heatmapLogger.log(`${Logs.mapbox} radius`, rad);
        // TODO: Not implemented yet.
        return 0;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): string {
        this._heatmapLogger.log(`${Logs.mapbox} getDataURL`, type, imageQuality);
        // TODO: Not implemented yet.
        return '';
    }

    /*********/
    // Private methods.
    /*********/

    private _addHeatmapLayer2Map() {

        this._map.on('load', () => {

            this._map.addSource('earthquakes', {
                'type': 'geojson',
                'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
            });

            this._map.addLayer({
                'id': 'earthquakes-heat',
                'type': 'heatmap',
                'source': 'earthquakes',
                'maxzoom': 9,
                'paint': {
                    // Increase the heatmap weight based on frequency and property magnitude
                    'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
                    // Increase the heatmap color weight weight by zoom level
                    // heatmap-intensity is a multiplier on top of heatmap-weight
                    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
                    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                    // Begin color ramp at 0-stop with a 0-transparancy color
                    // to create a blur-like effect.
                    'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0.4, 'rgb(0, 0, 255)', 0.6, 'rgb(0,255,255)', 0.7, 'rgb(0, 255, 0)', 0.8, 'rgba(244, 227, 0, 1)', 1, 'rgb(178,24,43)'],
                    // Adjust the heatmap radius by zoom level
                    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
                    // Transition from heatmap to circle layer by zoom level
                    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
                }
            },
            'waterway-label'
            );

            this._map.addLayer({
                'id': 'earthquakes-point',
                'type': 'circle',
                'source': 'earthquakes',
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