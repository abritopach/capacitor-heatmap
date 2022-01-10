import { Logs } from "../constants/constants";
import { Log } from "../log";
import type { HeatmapGradient, HeatmapData, MapboxHeatmapOptions, HeatmapPoint} from '../models/models';

import { BaseHeatmap } from './base-heatmap';

export class MapboxMapsHeatmap extends BaseHeatmap {

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

        return this._canvas;

    }

    destroy(): void {
        this._heatmapLogger.log(`${Logs.mapbox} destroy`);
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: HeatmapData): HeatmapData {
        this._heatmapLogger.log(`${Logs.mapbox} setData`, data);
        // TODO: Not implemented yet.
        return [];
    }

    getData(): HeatmapData {
        this._heatmapLogger.log(`${Logs.mapbox} getData`);
                // TODO: Not implemented yet.
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
        // TODO: Not implemented yet.
        return true;
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): {newWidth: number, newHeight: number} {
        // TODO: Not implemented yet.
        this._heatmapLogger.log(`${Logs.mapbox} resize`, options);
        return null;
    }

    gradient(grad: HeatmapGradient): HeatmapGradient {
        this._heatmapLogger.log(`${Logs.mapbox} gradient`, grad);
        // TODO: Not implemented yet.
        return null;
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


    private _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

}