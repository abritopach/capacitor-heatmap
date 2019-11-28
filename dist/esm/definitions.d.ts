import { HeatmapData } from "./models/models";
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
    initialize(options: {
        canvas: string | HTMLCanvasElement;
        data?: HeatmapData;
        debug?: boolean;
        overlap?: {
            parent: string;
        };
    }): Promise<{
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
}
