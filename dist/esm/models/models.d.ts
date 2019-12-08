/// <reference types="googlemaps" />
export interface IHeatmapLog {
    log(primaryMessage: string, ...supportingData: any[]): void;
    debug(primaryMessage: string, ...supportingData: any[]): void;
    warn(primaryMessage: string, ...supportingData: any[]): void;
    error(primaryMessage: string, ...supportingData: any[]): void;
    info(primaryMessage: string, ...supportingData: any[]): void;
}
export interface IHeatmapOptions {
    canvas: string | HTMLCanvasElement;
    type?: IHeatmapType;
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
export declare enum IHeatmapType {
    Simple = "simple",
    GoogleMaps = "googlemaps",
    LeafletMaps = "leafletmaps"
}
export declare type HeatmapGradient = Record<number, string>;
export declare type HeatmapPoint = Array<number> | IHeatmapPoint;
export declare type HeatmapData = Array<Array<number>>;
export interface IGMHeatmapOptions {
    map: google.maps.Map;
    type?: IHeatmapType;
    data?: GMHeatmapData;
    debug?: boolean;
}
export declare type GMHeatmapData = Array<google.maps.LatLng>;
