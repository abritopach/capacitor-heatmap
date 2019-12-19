import { BaseHeatmap } from "./base-heatmap";
import { IHeatmapOptions, HeatmapData, HeatmapPoint, HeatmapGradient, HeatmapPosition } from "../models/models";
import { Log } from "../log";

export class SimpleHeatmap extends BaseHeatmap {

    static readonly DEFAULT_GRADIENT: HeatmapGradient = {
        0.4: 'blue',
        0.6: 'cyan',
        0.7: 'lime',
        0.8: 'yellow',
        1.0: 'red'
    };
    static readonly DEFAULT_RADIUS = 20;
    static readonly DEFAULT_OPACITY = 0.05;

    _canvas: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;
    _max: number;
    _data: HeatmapData;
    _circle: HTMLCanvasElement;
    _grad: Uint8ClampedArray;
    _r: number;
    _opacity: number;
    _gradient: HeatmapGradient;
    _radius: number;

    getCanvas(): HTMLCanvasElement {
        return this._canvas;
    }

    initialize(options: IHeatmapOptions): HTMLCanvasElement {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__SimpleHeatmap__ initialize");
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
                this._heatmapLogger.warn("__SimpleHeatmap__ Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function."),
                []
            );
            this._opacity = SimpleHeatmap.DEFAULT_OPACITY;
            this._radius = SimpleHeatmap.DEFAULT_RADIUS;
            this.createCircle(SimpleHeatmap.DEFAULT_RADIUS);
            this._gradient = SimpleHeatmap.DEFAULT_GRADIENT;
            this.gradientArray(SimpleHeatmap.DEFAULT_GRADIENT);
        }
        else {
            this._heatmapLogger.error("__SimpleHeatmap__  ERROR -> Undefined canvas id or html canvas.");
        }
        return this._canvas;
    }

    destroy():  HTMLCanvasElement {
        if (this._canvas !== null) {
            this.clearCanvas();
            this.clearData();
            this._canvas = null;
            this._circle = null;
            this._grad = null;
        }
        return this._canvas;
      }

    /*********/
    // Methods for handling heatmap data.
    /*********/

    setData(data: HeatmapData): HeatmapData {
        this._heatmapLogger.log("__SimpleHeatmap__ setData");
        this._data = [];
        this._data = [...data];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    getData(): HeatmapData {
        this._heatmapLogger.log("__SimpleHeatmap__ getData");
        return this._data;
    }

    getValueAt(position: HeatmapPosition): number {
        let value = null;
        this._heatmapLogger.log("__SimpleHeatmap__ getValueAt", position);
        const xSearched = Array.isArray(position) ? position[0] : position.x;
        const ySearched = Array.isArray(position) ? position[1] : position.y;
        this._data.map((point: HeatmapPoint) => {
            const x = Array.isArray(point) ? point[0] : point.x;
            const y = Array.isArray(point) ? point[1] : point.y;
            const thickness = Array.isArray(point) ? point[2] : point.thickness;
            if ((x === xSearched) && (y === ySearched)) {
                value = thickness;
            }
        });
        return value;
    }

    clearData(): HeatmapData {
        this._heatmapLogger.log("__SimpleHeatmap__ clearData");
        this._data = [];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    addPoint(point: HeatmapPoint): HeatmapData {
        this._heatmapLogger.log("__SimpleHeatmap__ addPoint", {newPoint: point});
        this._data.push(point);
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    setMax(max: number): number {
        this._max = max;
        return this._max;
    }

    /*********/
    // Methods for rendering heatmap.
    /*********/

    draw(options: {opacity?: number, radius?: number, gradient?: HeatmapGradient, data?: HeatmapData}): boolean {
        this._heatmapLogger.log("__SimpleHeatmap__ draw");

        this._opacity = typeof options.opacity !== "undefined" ? options.opacity : this._opacity;
        typeof options.radius !== "undefined" ? this.createCircle(options.radius) : this.createCircle(this._radius);
        typeof options.gradient !== "undefined" ? this.gradientArray(options.gradient) : this.gradientArray(this._gradient);
        this._data = typeof options.data !== 'undefined' ? options.data : this._data;
        this._heatmapLogger.log("__SimpleHeatmap__ draw", {length: this._data.length});

        this._heatmapLogger.log("circle", {circle: this._circle});
        this._heatmapLogger.log("width&height", {width: this._width, height: this._height});
        const ctx = this._ctx;
        ctx.clearRect(0, 0, this._width, this._height);

        // Draw a grayscale heatmap by putting a blurred circle at each data point.
        this._data.map((point: HeatmapPoint) => {
        // this._heatmapLogger.log("data", {point: point});
        const thickness = Array.isArray(point) ? point[2] : point.thickness;
        const x = Array.isArray(point) ? point[0] : point.x;
        const y = Array.isArray(point) ? point[1] : point.y;
        ctx.globalAlpha = Math.min(Math.max(thickness / this._max, this._opacity), 1);
        ctx.drawImage(this._circle, x - this._r, y - this._r);
        });

        // Colorize the heatmap, using opacity value of each pixel to get the right color from our gradient.
        const colored = ctx.getImageData(0, 0, this._width, this._height);
        this._heatmapLogger.log("colored", {colored: colored});
        this._colorize(colored.data, this._grad);
        ctx.putImageData(colored, 0, 0);

        return true;

    }

    /*********/
    // Methods for handling heatmap appearance.
    /*********/

    resize(options: {width: number, height: number}): {newWidth: number, newHeight: number} {
        this._heatmapLogger.log("__SimpleHeatmap__ resize", {options: options});
        if ((this._canvas !== null) && (typeof this._canvas !== "undefined")) {
            this.clearCanvas();
            this._canvas.width = options.width;
            this._canvas.height = options.height;
            this._width = this._canvas.width;
            this._height = this._canvas.height;
            const opt = {};
            this.draw(opt);
            return {newWidth: this._canvas.width, newHeight: this._canvas.height};
        }
        return {newWidth: 0, newHeight: 0};
    }

    gradient(g: HeatmapGradient): HeatmapGradient {
        this._heatmapLogger.log("__SimpleHeatmap__ gradient", g);
        this._gradient = g;
        const opt = {gradient: g};
        this.draw(opt);
        return this._gradient;
    }

    opacity(opa: number): number {
        this._heatmapLogger.log("__SimpleHeatmap__ opacity", opa);
        this._opacity = opa;
        const opt = {opacity: opa};
        this.draw(opt);
        return this._opacity;
    }

    radius(r: number) {
        this._heatmapLogger.log("__SimpleHeatmap__ radius", r);
        this._radius = r;
        const opt = {radius: r};
        this.draw(opt);
        return this._radius;
    }

    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): string {
        return this._canvas.toDataURL(type, imageQuality);
    }

    /*********/
    // Private methods.
    /*********/

    private setSiblingElementStyles(parent: string, dimensions: {width: number, height: number}) {
        this._heatmapLogger.log("__SimpleHeatmap__  setSiblingElementStyles", dimensions);
        const {width, height} = dimensions;
        const element = document.getElementById(parent).firstElementChild as HTMLElement;
        element.style.width = width.toString() + "px";
        element.style.height = height.toString() + "px";
        element.style.position = "absolute";
        element.style.zIndex = "1";
    }

    private setCanvasElementStyles(dimensions: {width: number, height: number}) {
        this._heatmapLogger.log("__SimpleHeatmap__  setCanvasElementStyles", dimensions);
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
            this._heatmapLogger.error("__SimpleHeatmap__  ERROR -> Canvas dimensions are zero.");
        }
    }

    private getParentDimensions(parent: string) {
        const compStyles = window.getComputedStyle(document.getElementById(parent));
        const width = parseInt(compStyles.getPropertyValue('width'));
        const height = parseInt(compStyles.getPropertyValue('height'));
        this._heatmapLogger.log("__SimpleHeatmap__  getParentDimensions", {parent: this._canvas.parentNode, width: width, height: height});
        return {width: width, height: height};
    }

    private gradientArray(grad: HeatmapGradient) {
        this._heatmapLogger.log("__SimpleHeatmap__ gradientArray", {grad: grad});
        // Create a 256x1 gradient that we'll use to turn a grayscale heatmap into a colored one.
        const canvas = this._createCanvas(),
            ctx = canvas.getContext('2d'),
            gradient = ctx.createLinearGradient(0, 0, 0, 256);
        canvas.width = 1;
        canvas.height = 256;
        for (var i in grad) {
            gradient.addColorStop(+i, grad[i]);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 256);
        this._grad = ctx.getImageData(0, 0, 1, 256).data;
        this._heatmapLogger.log("gradientArray", {canvas: canvas, ctx: ctx});
    }

    private createCircle(r: number, blur?: number) {
        this._heatmapLogger.log("__SimpleHeatmap__ createCircle", {r: r});
        blur = blur === undefined ? 15 : blur;
        // Create a grayscale blurred circle image that we'll use for drawing points.
        const circle = this._circle = this._createCanvas(),
            ctx = circle.getContext('2d'),
            r2 = this._r = r + blur;

        circle.width = circle.height = r2 * 2;
        ctx.shadowOffsetX = ctx.shadowOffsetY = r2 * 2;
        ctx.shadowBlur = blur;
        ctx.shadowColor = 'black';
        ctx.beginPath();
        ctx.arc(-r2, -r2, r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    private clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    private _colorize (pixels: any, gradient: any) {
        this._heatmapLogger.log("__SimpleHeatmap__ _colorize", {pixels: pixels, gradient: gradient});
        for (var i = 0, len = pixels.length, j; i < len; i += 4) {
            j = pixels[i + 3] * 4; // get gradient color from opacity value
            if (j) {
                pixels[i] = gradient[j];
                pixels[i + 1] = gradient[j + 1];
                pixels[i + 2] = gradient[j + 2];
            }
        }
    }

    private _createCanvas() {
        this._heatmapLogger.log("__SimpleHeatmap__ _createCanvas");
        if (typeof document !== 'undefined') {
            return document.createElement('canvas');
        }
    }
}