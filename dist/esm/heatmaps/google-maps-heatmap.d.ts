/// <reference types="googlemaps" />
import { BaseHeatmap } from './base-heatmap';
import { HeatmapData, HeatmapGradient, IGMHeatmapOptions } from '../models/models';
export declare class GoogleMapsHeatmap extends BaseHeatmap {
    heatmap: google.maps.visualization.HeatmapLayer;
    getCanvas(): void;
    initialize(options: IGMHeatmapOptions): void;
    destroy(): void;
    /*********/
    /*********/
    setData(data: HeatmapData): void;
    getData(): void;
    getValueAt(position: Array<number>): void;
    clearData(): void;
    addPoint(point: Array<number>): void;
    setMax(max: number): void;
    /*********/
    /*********/
    draw(options: {
        minOpacity?: number;
        data?: HeatmapData;
    }): void;
    /*********/
    /*********/
    resize(options: {
        width: number;
        height: number;
    }): void;
    gradient(grad: HeatmapGradient): void;
    /*********/
    /*********/
    getDataURL(type: string, imageQuality: number): void;
}
