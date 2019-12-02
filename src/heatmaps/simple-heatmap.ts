import { BaseHeatmap } from "./base-heatmap";
import { IHeatmapOptions } from "../models/models";

export class SimpleHeatmap extends BaseHeatmap {

    initialize(options: IHeatmapOptions): HTMLCanvasElement {
        this._canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) as HTMLCanvasElement : options.canvas;
        if ((this._canvas !== null) && (typeof this._canvas !== 'undefined')) {
            if (typeof options.overlap !== 'undefined') {
                this.setCanvasOverElement(options.overlap);
            }
            this._ctx = this._canvas.getContext('2d');
            this._width = this._canvas.width;
            this._height = this._canvas.height;
            this._max = 1;
            this._data = typeof options.data !== 'undefined' ? options.data : [];
            (
                this._heatmapLogger.warn("Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function."),
                []
            );
        }
        else {
            this._heatmapLogger.error("ERROR -> Undefined canvas id or html canvas.");
        }
        return this._canvas;
    }

    draw() {
    }


    /*********/
    // Private methods.
    /*********/

    private setSiblingElementStyles(parent: string, dimensions: {width: number, height: number}) {
        this._heatmapLogger.log("setSiblingElementStyles", dimensions);
        const {width, height} = dimensions;
        const element = document.getElementById(parent).firstElementChild as HTMLElement;
        element.style.width = width.toString() + "px";
        element.style.height = height.toString() + "px";
        element.style.position = "absolute";
        element.style.zIndex = "1";
    }

    private setCanvasElementStyles(dimensions: {width: number, height: number}) {
        this._heatmapLogger.log("setCanvasElementStyles", dimensions);
        const {width, height} = dimensions;
        this._canvas.width = width;
        this._canvas.height = height;
        this._canvas.style.position = "relative";
        this._canvas.style.zIndex = "99999";
        this._canvas.style.pointerEvents = "none";
    }

    private setCanvasOverElement(overlap: {parent: string}) {
        const {width, height} = this.getParentDimensions(overlap.parent);
        this.setSiblingElementStyles(overlap.parent, {width, height});
        this.setCanvasElementStyles({width, height});
        if ((this._canvas.width === 0) || (this._canvas.height === 0)) {
            this._heatmapLogger.error("ERROR -> Canvas dimensions are zero.");
        }
    }

    private getParentDimensions(parent: string) {
        const compStyles = window.getComputedStyle(document.getElementById(parent));
        const width = parseInt(compStyles.getPropertyValue('width'));
        const height = parseInt(compStyles.getPropertyValue('height'));
        this._heatmapLogger.log("getParentDimensions", {parent: this._canvas.parentNode, width: width, height: height});
        return {width: width, height: height};
    }
}