import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';
export declare class HeatmapWeb extends WebPlugin implements HeatmapPlugin {
    _canvas: any;
    _ctx: any;
    _width: number;
    _height: number;
    _max: number;
    _data: any[];
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    createHeatmap(options: {
        canvas: string | HTMLCanvasElement;
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
}
declare const Heatmap: HeatmapWeb;
export { Heatmap };
