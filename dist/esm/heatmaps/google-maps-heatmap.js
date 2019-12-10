import { BaseHeatmap } from './base-heatmap';
import { Log } from "../log";
export class GoogleMapsHeatmap extends BaseHeatmap {
    initialize(options) {
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
    destroy() {
        // TODO
    }
    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data) {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ setData", data);
        this.heatmap.setData(data);
        return data;
    }
    getData() {
        this._heatmapLogger.log("__GoogleMapsHeatmap__ getData");
        return this.heatmap.getData();
    }
    getValueAt(position) {
        // TODO
        console.log(position);
    }
    clearData() {
        this.heatmap.setData([]);
        return [];
    }
    addPoint(point) {
        // TODO
        console.log(point);
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
        if (!this.map) {
            return false;
        }
        if (typeof options.data !== 'undefined')
            this.data = options.data;
        this._heatmapLogger.log("__GoogleMapsHeatmap__ draw", { data: this.data });
        this.heatmap.setData(options.data);
        this.heatmap.setMap(this.map);
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
        this.heatmap.set('gradient', grad);
        return this.heatmap.get('gradient') ? null : grad;
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