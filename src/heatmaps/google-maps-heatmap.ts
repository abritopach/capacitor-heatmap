import { BaseHeatmap } from './base-heatmap';
import { HeatmapGradient, IGMHeatmapOptions, GMHeatmapData, GMHeatmapPoint } from '../models/models';
import { Log } from "../log";

export class GoogleMapsHeatmap extends BaseHeatmap {

    _map: google.maps.Map;
    _heatmap: google.maps.visualization.HeatmapLayer;
    _data: GMHeatmapData;

    initialize(options: IGMHeatmapOptions): google.maps.visualization.HeatmapLayer {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__GoogleMapsHeatmap__ initialize");
        if ((typeof options.data !== "undefined") && (options.data !== null)) {
            this._data = options.data;
            this._map = options.map;
            this._heatmap = new google.maps.visualization.HeatmapLayer({
                data: options.data,
            });
            return this._heatmap;
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
        this._data.clear();
        this._data = data;
        this._heatmap.setData(this._data);
        return this._heatmap.getData();
    }

    getData(): GMHeatmapData {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ getData");
        return this._heatmap.getData();
    }

    getValueAt(position: Array<number>): void {
        // TODO
        console.log(position);
    }

    clearData(): GMHeatmapData {
        this._data.clear();
        this._heatmap.setData(this._data);
        return this._data;
    }

    addPoint(point: GMHeatmapPoint): GMHeatmapData {
        this._data.push(point);
        this._heatmap.setData(this._data);
        return this._heatmap.getData();
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
        if (!this._map) { return false; }
        if (typeof options.data !== 'undefined') this._data = options.data;
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw", {data: this._data});
        this._heatmap.setData(options.data);
        this._heatmap.setMap(this._map);
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
        this._heatmap.set('gradient', grad);
        return this._heatmap.get('gradient') ? null : grad;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): void {
        // TODO
        console.log(type, imageQuality);
    }
}