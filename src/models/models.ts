import type { Map, LatLngExpression, LatLngTuple } from 'leaflet';
import type * as mapboxgl from 'mapbox-gl';

export enum VerticalPosition {
    TOP = 'top',
    BOTTOM = 'bottom',
    CENTER = 'center',
}

export enum HorizontalPosition {
    START = 'start',
    END = 'end',
    CENTER = 'center',
}


/**
 * Description [Interface to define heatmap logs.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface HeatmapLog {
    log(primaryMessage: string, ...supportingData: any[]): void;
    debug(primaryMessage: string, ...supportingData: any[]): void;
    warn(primaryMessage: string, ...supportingData: any[]): void;
    error(primaryMessage: string, ...supportingData: any[]): void;
    info(primaryMessage: string, ...supportingData: any[]): void;
}

/**
 * Description [Interface to define color scale options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface ColorScale {
    show: boolean;
    position?: {
        vertical: VerticalPosition;
        horizontal: HorizontalPosition;
    };
    boxShadow?: string;
    text?: {
        start?: string;
        end?: string;
        color?: string;
    },
    background?: string;
    gradientColorMode?: 'original' | 'inverted'
}

/**
 * Description [Interface to define color scale styles.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface ColorScaleStyles {
    width: number;
    height: number;
    borderRadius: string;
    position: string;
    zIndex: string;
    marginTop: string;
    margin: string;
    padding: string;
    boxShadow: string;
    fillTextStart: string;
    fillTextEnd: string;
    fillTextColor: string;
    background: string;
}

/**
 * Description [Interface to define simple heatmap initialize options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface HeatmapOptions {
    element: string;
    type: HeatmapType;
    data?: HeatmapData;
    debug?: boolean;
    colorScale?: ColorScale;
}

/**
 * Description [Interface to define simple heatmap point.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface Coordinate {
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
export interface Point {
    x: number;
    y: number;
    thickness: number;
}

export enum HeatmapType {
    Simple = 'simple',
    GoogleMaps = 'googlemaps',
    LeafletMaps = 'leafletmaps',
    MapboxMaps = 'mapboxmaps'
}

/**
 * Description [Interface to define heatmap draw options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface HeatmapDrawOptions {
    opacity?: number,
    radius?: number,
    gradient?: HeatmapGradient | GMHeatmapGradient
    data?:  HeatmapData | GMHeatmapData | LMHeatmapData
}

export type HeatmapGradient = Record<number, string>;
export type HeatmapPoint = number[] | Point;
export type HeatmapPosition = number[] | Coordinate;
export type HeatmapData = (number[] | Point)[];

/**
 * Description [Interface to define google maps heatmap initialize options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface GMHeatmapOptions {
    map: google.maps.Map;
    type: HeatmapType;
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
export interface LMHeatmapOptions {
    map: Map;
    type: HeatmapType;
    data?: LMHeatmapData;
    debug?: boolean;
}

export type LMHeatmapData = LatLngExpression[];
export type LMHeatmapPoint = LatLngExpression;
export type LMHeatmapCoordinate = LatLngTuple;

/**
 * Description [Interface to define mapbox maps heatmap initialize options.]
 *
 * @author abrito
 * @version 0.0.1
 *
 * @interface
*/
export interface MapboxHeatmapOptions {
    map: mapboxgl.Map;
    type: HeatmapType;
    data?: HeatmapData;
    debug?: boolean;
}