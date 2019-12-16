export interface IHeatmapLog {
    log(primaryMessage: string, ...supportingData: any[]): void;
    debug(primaryMessage: string, ...supportingData: any[]): void;
    warn(primaryMessage: string, ...supportingData: any[]): void;
    error(primaryMessage: string, ...supportingData: any[]): void;
    info(primaryMessage: string, ...supportingData: any[]): void;
}

export interface IHeatmapOptions {
    canvas: string | HTMLCanvasElement;
    type: IHeatmapType;
    data?: HeatmapData;
    overlap?: {parent: string};
    debug?: boolean;
}

export interface IHeatmapPoint {
    x: number;
    y: number;
    thickness: number;
}

export enum IHeatmapType {
    Simple = 'simple',
    GoogleMaps = 'googlemaps',
    LeafletMaps = 'leafletmaps'
}

export interface IHeatmapDrawOptions {
    opacity?: number,
    radius?: number,
    gradient?: HeatmapGradient | GMHeatmapGradient
    data?:  HeatmapData | GMHeatmapData
}

export type HeatmapGradient = Record<number, string>;
export type HeatmapPoint = Array<number> | IHeatmapPoint;
export type HeatmapData = Array<Array<number> | IHeatmapPoint>;

export interface IGMHeatmapOptions {
    map: google.maps.Map;
    type: IHeatmapType;
    data?: GMHeatmapData;
    debug?: boolean;
}

export type GMHeatmapGradient = string[];
export type GMHeatmapPoint = google.maps.LatLng | google.maps.visualization.WeightedLocation;
export type GMHeatmapData = google.maps.MVCArray<google.maps.LatLng | google.maps.visualization.WeightedLocation>;


