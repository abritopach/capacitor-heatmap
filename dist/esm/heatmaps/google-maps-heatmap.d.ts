/// <reference types="googlemaps" />
import { BaseHeatmap } from './base-heatmap';
import { HeatmapGradient, IGMHeatmapOptions, GMHeatmapData, GMHeatmapPoint } from '../models/models';
export declare class GoogleMapsHeatmap extends BaseHeatmap {
    _map: google.maps.Map;
    _heatmap: google.maps.visualization.HeatmapLayer;
    _data: GMHeatmapData;
    initialize(options: IGMHeatmapOptions): google.maps.visualization.HeatmapLayer;
    destroy(): void;
    /*********/
    /*********/
    setData(data: GMHeatmapData): GMHeatmapData;
    getData(): GMHeatmapData;
    getValueAt(position: Array<number>): void;
    clearData(): GMHeatmapData;
    addPoint(point: GMHeatmapPoint): GMHeatmapData;
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
