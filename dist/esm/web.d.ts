import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';
import { HeatmapData, HeatmapGradient, IHeatmapOptions, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint, GMHeatmapPoint } from './models/models';
export declare class HeatmapWeb extends WebPlugin implements HeatmapPlugin {
    heatmap: any;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getCanvas(): Promise<{
        value: HTMLCanvasElement;
    }>;
    initialize(options: (IHeatmapOptions | IGMHeatmapOptions)): Promise<{
        value: HTMLCanvasElement;
    }>;
    destroy(): Promise<{
        value: HTMLCanvasElement;
    }>;
    /*********/
    /*********/
    setData(data: HeatmapData | GMHeatmapData): Promise<{
        value: HeatmapData;
    }>;
    getData(): Promise<{
        value: HeatmapData;
    }>;
    getValueAt(position: Array<number>): Promise<{
        value: number;
    }>;
    clearData(): Promise<{
        value: HeatmapData;
    }>;
    addPoint(point: HeatmapPoint | GMHeatmapPoint): Promise<{
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
    } | {
        minOpacity?: number;
        data?: GMHeatmapData;
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
}
declare const Heatmap: HeatmapWeb;
export { Heatmap };
