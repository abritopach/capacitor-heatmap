import { HeatmapData, IHeatmapOptions, HeatmapGradient } from "./models/models";
declare module "@capacitor/core" {
    interface PluginRegistry {
        Heatmap: HeatmapPlugin;
    }
}
export interface HeatmapPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
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
}
