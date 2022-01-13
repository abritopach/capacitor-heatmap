import { Logs } from "../constants/constants";
import { Log } from "../log";
import type { HeatmapGradient, HeatmapData, MapboxHeatmapOptions, HeatmapPoint, MapboxHeatmapData } from '../models/models';

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

    getValueAt(coordinate: []): number | null {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.getValueAt}`, coordinate);
                // TODO: Not implemented yet.
        return null;
    }

    clearData(): HeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.clearData}`);
        // TODO: Not implemented yet.
        return [];
    }

    addPoint(point: HeatmapPoint): HeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.mapbox} ${Logs.methods.addPoint}`, {newPoint: point});
        // TODO: Not implemented yet.
        return [];
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
        // TODO: Not implemented yet.
        return {};
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

    private _addHeatmapLayer2Map() {

        this._map.on('load', () => {

            /*
            this._map.addSource('earthquakes', {
                'type': 'geojson',
                'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
            });
            */

            this._map.addSource('earthquakes', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.5129, 63.1016, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -150.4048, 63.1224, 105.5 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.3597, 63.0781, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -118.497, 34.299667, 7.64 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -87.6901, 12.0623, 46.41 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.5053, 63.0719, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -178.4576, -20.2873, 614.26 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -148.789, 63.1725, 7.5 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -120.993164, 36.421833, 6.37 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -117.0155, 33.656333, 12.37 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.512, 63.0879, 10.8 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.4378, 63.0933, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -149.6538, 63.2272, 96.8 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.5325, 63.0844, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -149.4752, 61.8518, 54.3 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -150.8597, 61.6214, 50.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -149.7142, 62.9656, 93.6 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.2484, 61.2705, 69.1 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -152.0732, 65.5942, 14.8 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -90.5445, 13.5146, 54.36 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -118.819504, 37.605499, 4.14 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -118.930168, 37.636833, -0.71 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -117.509167, 34.1555, 16.34 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -116.792167, 33.5115, 5.16 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -150.9126, 63.1812, 150.4 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -155.078659, 19.374167, 2.15 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -147.3106, 61.5726, 26.9 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -150.5846, 60.2607, 34.2 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -116.929, 34.254833, 18.27 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.5065, 63.0847, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -147.8929, 63.5257, 3.3 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -175.7258, -18.9821, 195.22 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.3473, 63.0775, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -121.137497, 36.579834, 7.72 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.1075, 61.8312, 71.7 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.3769, 63.0621, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -94.8319, 16.7195, 58.84 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -120.689833, 47.049167, 5.38 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.5283, 63.0785, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.6683, 60.7696, 67.1 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -149.7591, 61.6478, 30.6 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.3458, 63.0633, 0.0 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.4669, 63.0675, 3.4 ] } },
                        { "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ -151.5169, 63.083, 1.0 ] } },
                    ]
                }
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