import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';
export declare class HeatmapWeb extends WebPlugin implements HeatmapPlugin {
    _canvas: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;
    _max: number;
    _data: Array<Array<number>>;
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
        data?: Array<Array<number>>;
        debug?: boolean;
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
    /*********/
    /*********/
    setData(data: Array<Array<number>>): Promise<{
        value: any[];
    }>;
    clearData(): Promise<{
        value: any[];
    }>;
    addPoint(point: any): Promise<{
        value: any[];
    }>;
    /*********/
    /*********/
    draw(options: {
        minOpacity?: number;
        data?: Array<Array<number>>;
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
