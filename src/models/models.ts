import type { Map, LatLngExpression, LatLngTuple } from 'leaflet';

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
    element: string;
    type: IHeatmapType;
    data?: HeatmapData;
    debug?: boolean;
    showColorScale?: boolean;
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
    data?:  HeatmapData | GMHeatmapData | LMHeatmapData
}

export type HeatmapGradient = Record<number, string>;
export type HeatmapPoint = number[] | IHeatmapPoint;
export type HeatmapPosition = number[] | IHeatmapPosition;
export type HeatmapData = (number[] | IHeatmapPoint)[];

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


/**
 * Description [Interface to define leaflet maps heatmap initialize options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface ILMHeatmapOptions {
    map: Map;
    type: IHeatmapType;
    data?: LMHeatmapData;
    debug?: boolean;
}

export type LMHeatmapData = LatLngExpression[];
export type LMHeatmapPoint = LatLngExpression;
export type LMHeatmapCoordinate = LatLngTuple;