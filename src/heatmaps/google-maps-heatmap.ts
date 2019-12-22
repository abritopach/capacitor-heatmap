import { BaseHeatmap } from './base-heatmap';
import { IGMHeatmapOptions, GMHeatmapData, GMHeatmapPoint, GMHeatmapGradient, GMHeatmapCoordinate } from '../models/models';
import { Log } from "../log";

export class GoogleMapsHeatmap extends BaseHeatmap {

    static readonly DEFAULT_GRADIENT = [
        "rgba(102, 255, 0, 0)",
        "rgba(102, 255, 0, 1)",
        "rgba(147, 255, 0, 1)",
        "rgba(193, 255, 0, 1)",
        "rgba(238, 255, 0, 1)",
        "rgba(244, 227, 0, 1)",
        "rgba(249, 198, 0, 1)",
        "rgba(255, 170, 0, 1)",
        "rgba(255, 113, 0, 1)",
        "rgba(255, 57, 0, 1)",
        "rgba(255, 0, 0, 1)"
    ];
    static readonly DEFAULT_RADIUS = 10;
    static readonly DEFAULT_OPACITY = 0.5;

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
            this._heatmap.set('opacity', GoogleMapsHeatmap.DEFAULT_OPACITY);
            this._heatmap.set('radius', GoogleMapsHeatmap.DEFAULT_RADIUS);
            this._heatmap.set('gradient', GoogleMapsHeatmap.DEFAULT_GRADIENT);
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

    getValueAt(coordinate: GMHeatmapCoordinate): void {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ getValueAt", coordinate);
        let value = null;
        this._data.forEach((point: GMHeatmapPoint) => {
            if (point.hasOwnProperty('location')) {
                if ((point as  google.maps.visualization.WeightedLocation).location.equals(coordinate)) {
                    value = (point as  google.maps.visualization.WeightedLocation).weight;
                }
            }
            else {
                if ((point as  google.maps.LatLng).equals(coordinate)) {
                    value = 1;
                }
            }
        });
        return value;
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
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: GMHeatmapData}): boolean {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw");
        if (!this._map) { return false; }
        this._data = typeof options.data !== 'undefined' ? options.data : this._data;
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw", {data: this._data});
        this._heatmap.setData(options.data);
        this._heatmap.set('opacity', typeof options.opacity !== "undefined" ? options.opacity : this._heatmap.get('opacity'));
        this._heatmap.set('radius', typeof options.radius !== "undefined" ? options.radius : this._heatmap.get('radius'));
        this._heatmap.set('gradient', typeof options.gradient !== "undefined" ? options.gradient : this._heatmap.get('gradient'));
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

    gradient(grad: GMHeatmapGradient): GMHeatmapGradient {
        this._heatmap.set('gradient', grad);
        return this._heatmap.get('gradient') ? null : grad;
    }

    opacity(opa: number): number {
        this._heatmap.set('opacity', opa);
        return opa;
    }

    radius(rad: number): number {
        this._heatmap.set('radius', rad);
        return rad;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): void {
        // TODO
        console.log(type, imageQuality);
    }
}