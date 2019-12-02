import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';
import { HeatmapData, HeatmapGradient, IHeatmapOptions } from './models/models';
export declare class HeatmapWeb extends WebPlugin implements HeatmapPlugin {
    _canvas: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;
    _max: number;
    _data: HeatmapData;
    _circle: HTMLCanvasElement;
    _heatmapLogger: any;
    _grad: Uint8ClampedArray;
    _r: number;
    static readonly DEFAULT_GRADIENT: HeatmapGradient;
    static readonly DEFAULT_RADIUS = 25;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getCanvas(): Promise<{
        value: HTMLCanvasElement;
    }>;
    initialize(options: IHeatmapOptions): Promise<{
        value: HTMLCanvasElement;
    }>;
    destroy(canvasId: string): Promise<{
        value: HTMLCanvasElement;
    }>;
    /*********/
    /*********/
    setData(data: HeatmapData): Promise<{
        value: HeatmapData;
    }>;
    clearData(): Promise<{
        value: HeatmapData;
    }>;
    addPoint(point: Array<number>): Promise<{
        value: HeatmapData;
    }>;
    setMax(max: number): Promise<{
        value: number;
    }>;
    /*********/
    /*********/
    draw(options: {
        minOpacity?: number;
        data?: HeatmapData;
    }): Promise<{
        value: boolean;
    }>;
    /*********/
    /*********/
    resize(options: {
        width: number;
        height: number;
    }): Promise<{
        value: {
            newWidth: number;
            newHeight: number;
        };
    }>;
    gradient(grad: HeatmapGradient): Promise<{
        value: Uint8ClampedArray;
    }>;
    /*********/
    /*********/
    getDataURL(type: string, imageQuality: number): Promise<{
        value: string;
    }>;
    /*********/
    /*********/
    private setSiblingElementStyles;
    private setCanvasElementStyles;
    private setCanvasOverElement;
    private getParentDimensions;
    private clearCanvas;
    private radius;
    private _colorize;
    private _createCanvas;
}
declare const Heatmap: HeatmapWeb;
export { Heatmap };
