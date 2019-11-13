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
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    createHeatmap(options: {
        canvas: string | HTMLCanvasElement;
        data: any[];
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
    draw(minOpacity?: number): Promise<void>;
    private _createCanvas;
}
declare const Heatmap: HeatmapWeb;
export { Heatmap };
