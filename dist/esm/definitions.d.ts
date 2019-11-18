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
        data?: any[];
        debug?: boolean;
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
    setData(data: any[]): Promise<{
        value: any[];
    }>;
    draw(options: {
        minOpacity?: number;
        data?: any[];
    }): Promise<{
        value: boolean;
    }>;
}
