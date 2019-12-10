import { BaseHeatmap } from './base-heatmap';
import { Log } from "../log";
export class GoogleMapsHeatmap extends BaseHeatmap {
    initialize(options) {
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
    destroy() {
        // TODO
    }
    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data) {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ setData", data);
        this._data = [];
        this._data = data;
        this._heatmap.setData(this._data);
        return this._heatmap.getData();
    }
    getData() {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ getData");
        return this._heatmap.getData();
    }
    getValueAt(position) {
        // TODO
        console.log(position);
    }
    clearData() {
        this._data = [];
        this._heatmap.setData(this._data);
        return this._data;
    }
    addPoint(point) {
        this._data.push(point);
        this._heatmap.setData(this._data);
        return this._heatmap.getData();
    }
    setMax(max) {
        // TODO
        console.log(max);
    }
    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options) {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw");
        if (!this._map) {
            return false;
        }
        if (typeof options.data !== 'undefined')
            this._data = options.data;
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw", { data: this._data });
        this._heatmap.setData(options.data);
        this._heatmap.setMap(this._map);
        return true;
    }
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options) {
        // TODO
        console.log(options);
    }
    gradient(grad) {
        this._heatmap.set('gradient', grad);
        return this._heatmap.get('gradient') ? null : grad;
    }
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type, imageQuality) {
        // TODO
        console.log(type, imageQuality);
    }
}
//# sourceMappingURL=google-maps-heatmap.js.map