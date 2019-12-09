import { BaseHeatmap } from './base-heatmap';
import { HeatmapGradient, IGMHeatmapOptions, GMHeatmapData } from '../models/models';
import { Log } from "../log";

export class GoogleMapsHeatmap extends BaseHeatmap {

    map: google.maps.Map;
    heatmap: google.maps.visualization.HeatmapLayer;
    data: GMHeatmapData;

    initialize(options: IGMHeatmapOptions): google.maps.visualization.HeatmapLayer {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__GoogleMapsHeatmap__ initialize");
        if ((typeof options.data !== "undefined") && (options.data !== null)) {
            this.data = options.data;
            this.map = options.map;
            this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: options.data,
            });
            return this.heatmap;
        }
    }

    destroy(): void {
        // TODO
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: GMHeatmapData): GMHeatmapData {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ setData", data);
        this.heatmap.setData(data);
        return data;
    }

    getData(): GMHeatmapData {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ getData");
        return this.heatmap.getData();
    }

    getValueAt(position: Array<number>): void {
        // TODO
        console.log(position);
    }

    clearData(): GMHeatmapData {
        this.heatmap.setData([]);
        return [];
    }

    addPoint(point: Array<number>): void {
        // TODO
        console.log(point);
    }

    setMax(max: number): void {
        // TODO
        console.log(max);
    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {minOpacity?: number, data?: GMHeatmapData}): boolean {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw");
        if (!this.map) { return false; }
        if (typeof options.data !== 'undefined') this.data = options.data;
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw", {data: this.data});
        this.heatmap.setData(options.data);
        this.heatmap.setMap(this.map);
        return true;
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): void {
        // TODO
        console.log(options);
    }

    gradient(grad: HeatmapGradient): HeatmapGradient {
        this.heatmap.set('gradient', grad);
        return this.heatmap.get('gradient') ? null : grad;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): void {
        // TODO
        console.log(type, imageQuality);
    }
}