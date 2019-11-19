import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';
export declare class HeatmapWeb extends WebPlugin implements HeatmapPlugin {
    _canvas: any;
    _ctx: any;
    _width: number;
    _height: number;
    _max: number;
    _data: any[];
    _circle: any;
    _heatmapLogger: any;
    _grad: any;
    _r: any;
    defaultGradient: any;
    defaultRadius: number;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initialize(options: {
        canvas: string | HTMLCanvasElement;
        data?: any[];
        debug?: boolean;
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
    /*********/
    /*********/
    setData(data: any[]): Promise<{
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
        data?: any[];
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
