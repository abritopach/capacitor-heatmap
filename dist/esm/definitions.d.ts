import { HeatmapData, IHeatmapOptions, HeatmapGradient, IGMHeatmapOptions, GMHeatmapData } from "./models/models";
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
    initialize(options: IHeatmapOptions | IGMHeatmapOptions): Promise<{
        value: HTMLCanvasElement;
    }>;
    destroy(): Promise<{
        value: HTMLCanvasElement;
    }>;
    /*********/
    /*********/
    setData(data: HeatmapData): Promise<{
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
