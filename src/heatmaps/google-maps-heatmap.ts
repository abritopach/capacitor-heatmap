import { BaseHeatmap } from './base-heatmap';
import { HeatmapData, HeatmapGradient, IGMHeatmapOptions } from '../models/models';
import { Log } from "../log";

import {} from 'googlemaps';

export class GoogleMpasHeatmap extends BaseHeatmap {

    heatmap: google.maps.visualization.HeatmapLayer;

    getCanvas(): void {
        // TODO
    }
    initialize(options: IGMHeatmapOptions): void {
        // TODO
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__GoogleMapsHeatmap__ initialize");
        if ((typeof options.data !== "undefined") && (options.data !== null)) {
            this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: options.data,
            });
            this.heatmap.setMap(options.map);
        }
    }
    destroy(): void {
        // TODO
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: HeatmapData): void {
        // TODO
    }
    getData(): void {
        // TODO
    }
    getValueAt(position: Array<number>): void {
        // TODO
    }
    clearData(): void {
        // TODO
    }
    addPoint(point: Array<number>): void {
        // TODO
    }
    setMax(max: number): void {
        // TODO
    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {minOpacity?: number, data?: HeatmapData}): void {
        // TODO
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): void {
        // TODO
    }
    gradient(grad: HeatmapGradient): void {
        // TODO
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): void {
        // TODO
    }
}