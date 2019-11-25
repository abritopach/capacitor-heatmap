import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';
import { HeatmapData } from './models/models';
export declare class HeatmapWeb extends WebPlugin implements HeatmapPlugin {
    _canvas: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;
    _max: number;
    _data: HeatmapData;
    _circle: HTMLCanvasElement;
    _heatmapLogger: any;
    _grad: any;
    _r: number;
    defaultGradient: any;
    static readonly DEFAULT_RADIUS = 25;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initialize(options: {
        canvas: string | HTMLCanvasElement;
        data?: HeatmapData;
        debug?: boolean;
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
    /*********/
    /*********/
    setData(data: HeatmapData): Promise<{
        value: any[];
    }>;
    clearData(): Promise<{
        value: any[];
    }>;
    addPoint(point: Array<number>): Promise<{
        value: HeatmapData;
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
    /*********/
    /*********/
    private clearCanvas;
    private radius;
    private gradient;
    private _colorize;
    private _createCanvas;
}
declare const Heatmap: HeatmapWeb;
export { Heatmap };
