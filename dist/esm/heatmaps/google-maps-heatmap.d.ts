/// <reference types="googlemaps" />
import { BaseHeatmap } from './base-heatmap';
import { HeatmapGradient, IGMHeatmapOptions, GMHeatmapData } from '../models/models';
export declare class GoogleMapsHeatmap extends BaseHeatmap {
    map: google.maps.Map;
    heatmap: google.maps.visualization.HeatmapLayer;
    data: GMHeatmapData;
    initialize(options: IGMHeatmapOptions): google.maps.visualization.HeatmapLayer;
    destroy(): void;
    /*********/
    /*********/
    setData(data: GMHeatmapData): GMHeatmapData;
    getData(): GMHeatmapData;
    getValueAt(position: Array<number>): void;
    clearData(): GMHeatmapData;
    addPoint(point: Array<number>): void;
    setMax(max: number): void;
    /*********/
    /*********/
    draw(options: {
        minOpacity?: number;
        data?: GMHeatmapData;
    }): boolean;
    /*********/
    /*********/
    resize(options: {
        width: number;
        height: number;
    }): void;
    gradient(grad: HeatmapGradient): HeatmapGradient;
    /*********/
    /*********/
    getDataURL(type: string, imageQuality: number): void;
}
