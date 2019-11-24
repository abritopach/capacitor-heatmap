export interface IHeatmapLog {
    log(primaryMessage: string, ...supportingData: any[]): void;
    debug(primaryMessage: string, ...supportingData: any[]): void;
    warn(primaryMessage: string, ...supportingData: any[]): void;
    error(primaryMessage: string, ...supportingData: any[]): void;
    info(primaryMessage: string, ...supportingData: any[]): void;
}

export interface IHeatmapPoint {
    x: number;
    y: number;
    thickness: number;
}

export type HeatmapPoint = Array<number> | IHeatmapPoint;
export type HeatmapData = Array<Array<number>> /*| Array<IHeatmapPoint>*/;

