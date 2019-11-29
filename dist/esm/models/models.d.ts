export interface IHeatmapLog {
    log(primaryMessage: string, ...supportingData: any[]): void;
    debug(primaryMessage: string, ...supportingData: any[]): void;
    warn(primaryMessage: string, ...supportingData: any[]): void;
    error(primaryMessage: string, ...supportingData: any[]): void;
    info(primaryMessage: string, ...supportingData: any[]): void;
}
export interface IHeatmapOptions {
    canvas: string | HTMLCanvasElement;
    data?: HeatmapData;
    overlap?: {
        parent: string;
    };
    debug?: boolean;
}
export interface IHeatmapPoint {
    x: number;
    y: number;
    thickness: number;
}
export declare type HeatmapGradient = Record<number, string>;
export declare type HeatmapPoint = Array<number> | IHeatmapPoint;
export declare type HeatmapData = Array<Array<number>>;
