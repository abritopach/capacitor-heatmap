import { BaseHeatmap } from "./base-heatmap";
import { IHeatmapOptions, HeatmapData, HeatmapPoint, HeatmapGradient } from "../models/models";
export declare class SimpleHeatmap extends BaseHeatmap {
    getCanvas(): HTMLCanvasElement;
    initialize(options: IHeatmapOptions): HTMLCanvasElement;
    destroy(): HTMLCanvasElement;
    /*********/
    /*********/
    setData(data: HeatmapData): HeatmapData;
    getData(): HeatmapData;
    getValueAt(position: Array<number>): number;
    clearData(): HeatmapData;
    addPoint(point: HeatmapPoint): HeatmapData;
    setMax(max: number): number;
    /*********/
    /*********/
    draw(options: {
        minOpacity?: number;
        data?: HeatmapData;
    }): boolean;
    /*********/
    /*********/
    resize(options: {
        width: number;
        height: number;
    }): {
        newWidth: number;
        newHeight: number;
    };
    gradient(grad: HeatmapGradient): Uint8ClampedArray;
    /*********/
    /*********/
    getDataURL(type: string, imageQuality: number): string;
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
