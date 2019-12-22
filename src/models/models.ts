/**
 * Description [Interface to define heatmap logs.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface IHeatmapLog {
    log(primaryMessage: string, ...supportingData: any[]): void;
    debug(primaryMessage: string, ...supportingData: any[]): void;
    warn(primaryMessage: string, ...supportingData: any[]): void;
    error(primaryMessage: string, ...supportingData: any[]): void;
    info(primaryMessage: string, ...supportingData: any[]): void;
}

/**
 * Description [Interface to define simple heatmap initialize options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface IHeatmapOptions {
    canvas: string | HTMLCanvasElement;
    type: IHeatmapType;
    data?: HeatmapData;
    overlap?: {parent: string};
    debug?: boolean;
}

/**
 * Description [Interface to define simple heatmap point.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface IHeatmapPosition {
    x: number;
    y: number;
}

/**
 * Description [Interface to define simple heatmap point.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
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

/**
 * Description [Interface to define heatmap draw options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface IHeatmapDrawOptions {
    opacity?: number,
    radius?: number,
    gradient?: HeatmapGradient | GMHeatmapGradient
    data?:  HeatmapData | GMHeatmapData
}

export type HeatmapGradient = Record<number, string>;
export type HeatmapPoint = Array<number> | IHeatmapPoint;
export type HeatmapPosition = Array<number> | IHeatmapPosition;
export type HeatmapData = Array<Array<number> | IHeatmapPoint>;

/**
 * Description [Interface to define google maps heatmap initialize options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface IGMHeatmapOptions {
    map: google.maps.Map;
    type: IHeatmapType;
    data?: GMHeatmapData;
    debug?: boolean;
}

export type GMHeatmapGradient = string[];
export type GMHeatmapPoint = google.maps.LatLng | google.maps.visualization.WeightedLocation;
export type GMHeatmapCoordinate = google.maps.LatLng;
export type GMHeatmapData = google.maps.MVCArray<google.maps.LatLng | google.maps.visualization.WeightedLocation>;


