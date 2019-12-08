import { BaseHeatmap } from './base-heatmap';
import { Log } from "../log";
export class GoogleMapsHeatmap extends BaseHeatmap {
    getCanvas() {
        // TODO
    }
    initialize(options) {
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
    destroy() {
        // TODO
    }
    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data) {
        // TODO
        console.log(data);
    }
    getData() {
        // TODO
    }
    getValueAt(position) {
        // TODO
        console.log(position);
    }
    clearData() {
        // TODO
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
        // TODO
        console.log(options);
    }
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options) {
        // TODO
        console.log(options);
    }
    gradient(grad) {
        // TODO
        console.log(grad);
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