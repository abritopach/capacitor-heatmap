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
    createHeatmap(options: {
        canvas: string | HTMLCanvasElement;
    }): Promise<{
        value: HTMLCanvasElement;
    }>;
}
