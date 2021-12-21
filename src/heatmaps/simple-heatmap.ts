import { Log } from "../log";
import type { IHeatmapOptions, HeatmapData, HeatmapPoint, HeatmapGradient, HeatmapPosition, ColorScale, ColorScaleStyles } from "../models/models";
import { Utils }  from "../utils/utils";

import { BaseHeatmap } from "./base-heatmap";

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
    static readonly DEFAULT_COLOR_SCALE_STYLES: ColorScaleStyles = {
        width: 250,
        height: 20,
        borderRadius: "5px",
        position: "absolute",
        zIndex: "999999",
        marginTop: "-10px",
        margin: "15px",
        padding: "10px",
        boxShadow: "0px 0px 5px 1px black",
        fillTextStart: 'COLD',
        fillTextEnd: 'HOT',
        fillTextColor: 'black',
        background: '#00F8'
    }

    _canvas!: HTMLCanvasElement;
    _ctx!: CanvasRenderingContext2D;
    _width!: number;
    _height!: number;
    _max!: number;
    _data!: HeatmapData;
    _circle!: HTMLCanvasElement;
    _gradArray!: Uint8ClampedArray;
    _r!: number;
    _opacity!: number;
    _gradient!: HeatmapGradient;
    _radius!: number;
    _canvasColorScale!: HTMLCanvasElement;
    _copyColorScaleOptions: ColorScale = { show: false};

    initialize(options: IHeatmapOptions): HTMLCanvasElement {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__SimpleHeatmap__ initialize");

        if (options?.colorScale?.show) {
            this._createColorScale(options.element, options.colorScale);
        }

        this._addHeatmapLayer2Element(options.element);
        this._ctx = this._canvas.getContext('2d') as CanvasRenderingContext2D;
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._max = 1;
        this._data = typeof options.data !== 'undefined' ? options.data :
        (
            this._heatmapLogger.warn("__SimpleHeatmap__ Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function."),
            []
        );
        this._opacity = SimpleHeatmap.DEFAULT_OPACITY;
        this._radius = SimpleHeatmap.DEFAULT_RADIUS;
        const result = Utils.createCircle(this._radius);
        this._circle = result.circle as HTMLCanvasElement;
        this._r = result.radius;
        this._gradient = SimpleHeatmap.DEFAULT_GRADIENT;
        this._gradArray = Utils.gradientArray(this._gradient);

        return this._canvas;
    }

    destroy():  HTMLCanvasElement {
        if (this._canvas !== null) {
            this._clearCanvas();
            this.clearData();
            //this._canvas = null;
            //this._circle = null;
            //this._gradArray = null;
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

    getValueAt(position: HeatmapPosition): number | null {
        let value = null;
        this._heatmapLogger.log("__SimpleHeatmap__ getValueAt", position);
        const xSearched = Array.isArray(position) ? position[0] : position.x;
        const ySearched = Array.isArray(position) ? position[1] : position.y;
        this._data.forEach((point: HeatmapPoint) => {
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

        const result = Utils.createCircle(typeof options.radius !== "undefined" ? options.radius : this._radius);
        this._circle = result.circle as HTMLCanvasElement;
        this._r = result.radius;

        this._gradArray = typeof options.gradient !== "undefined" ? Utils.gradientArray(options.gradient) : Utils.gradientArray(this._gradient);
        this._data = typeof options.data !== 'undefined' ? options.data : this._data;
        this._heatmapLogger.log("__SimpleHeatmap__ draw", {length: this._data.length});

        this._heatmapLogger.log("circle", {circle: this._circle});
        this._heatmapLogger.log("width&height", {width: this._width, height: this._height});
        const ctx = this._ctx;
        ctx.clearRect(0, 0, this._width, this._height);

        // Draw a grayscale heatmap by putting a blurred circle at each data point.
        this._data.forEach((point: HeatmapPoint) => {
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
        Utils.colorize(colored.data, this._gradArray);
        ctx.putImageData(colored, 0, 0);

        return true;

    }

    /*********/
    // Methods for handling heatmap appearance.
    /*********/

    resize(options: {width: number, height: number}): {newWidth: number, newHeight: number} {
        this._heatmapLogger.log("__SimpleHeatmap__ resize", {options: options});
        if ((this._canvas !== null) && (typeof this._canvas !== "undefined")) {
            this._clearCanvas();
            this._canvas.width = options.width;
            this._canvas.height = options.height;
            this._width = this._canvas.width;
            this._height = this._canvas.height;
            const opt = {};
            this.draw(opt);
            this._createColorScale('testHeatmap', this._copyColorScaleOptions);
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

    radius(r: number): number {
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
        this._heatmapLogger.log("__SimpleHeatmap__ getDataURL", type, imageQuality);
        return this._canvas.toDataURL(type, imageQuality);
    }

    /*********/
    // Private methods.
    /*********/

    private _createColorScale(element: string, colorScaleOptions: ColorScale) {
        this._heatmapLogger.log("__SimpleHeatmap__ createColorScale");
        const el: HTMLElement = document.getElementById(element) as HTMLElement;

        if (document.getElementById('colorScale') !== null) {
            const colorScale: HTMLElement = document.getElementById('colorScale') as HTMLElement;
            colorScale.parentElement!.removeChild(colorScale);
            // this._canvasColorScale = null;
        }

        if (colorScaleOptions) {
            this._copyColorScaleOptions = colorScaleOptions;
        }

        this._canvasColorScale = Utils.createCanvas() as HTMLCanvasElement;
        this._addColorScaleStyles(this._canvasColorScale, colorScaleOptions);

        const ctx = this._canvasColorScale.getContext('2d');
        this._canvasColorScale.style.backgroundColor = colorScaleOptions?.background ? colorScaleOptions.background : SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.background;
        for (let t = -30; t < 30; t += 0.03) {
            const x0 = (t + 30) * 4;
            const x1 = x0;
            const hue = 240 * (30 - t) / 60;
            (ctx as CanvasRenderingContext2D).fillStyle = 'hsl(' + [hue, '70%', '60%'] + ')';
            (ctx as CanvasRenderingContext2D).fillRect(x1, 0, x0, 20);
        }
        (ctx as CanvasRenderingContext2D).fillStyle = colorScaleOptions?.text?.color ? colorScaleOptions.text.color :
        SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.fillTextColor;
        (ctx as CanvasRenderingContext2D).textAlign = "start";
        const textStart = colorScaleOptions?.text?.start ? colorScaleOptions.text.start : SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.fillTextStart;
        (ctx as CanvasRenderingContext2D).fillText(textStart, 5, 15);
        (ctx as CanvasRenderingContext2D).textAlign = "end";
        const textEnd = colorScaleOptions?.text?.end ? colorScaleOptions.text.end : SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.fillTextEnd;
        (ctx as CanvasRenderingContext2D).fillText(textEnd, 240, 15);
        el.parentElement!.appendChild(this._canvasColorScale);
    }

    private _addColorScaleStyles(canvasColorScale: HTMLCanvasElement, colorScaleOptions: ColorScale) {
        canvasColorScale.id = "colorScale";
        canvasColorScale.width = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.width;
        canvasColorScale.height = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.height;
        canvasColorScale.style.borderRadius = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.borderRadius;
        canvasColorScale.style.position = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.position;
        canvasColorScale.style.zIndex = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.zIndex;
        canvasColorScale.style.marginTop = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.marginTop;
        canvasColorScale.style.margin = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.margin;
        canvasColorScale.style.padding = SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.padding;
        canvasColorScale.style.boxShadow = colorScaleOptions.boxShadow ? colorScaleOptions.boxShadow : SimpleHeatmap.DEFAULT_COLOR_SCALE_STYLES.boxShadow;

        if (!colorScaleOptions.position) {
            canvasColorScale.style.left = "0px";
            canvasColorScale.style.right = "0px";
        }

        if ((colorScaleOptions.position?.vertical === "top") && (colorScaleOptions.position?.horizontal === "start")) {
            canvasColorScale.style.left = "0px";
            canvasColorScale.style.right = "0px";
        }
        if ((colorScaleOptions.position?.vertical === "top") && (colorScaleOptions.position?.horizontal === "end")) {
            canvasColorScale.style.right = "0px";
        }
        if ((colorScaleOptions.position?.vertical === "bottom") && (colorScaleOptions.position?.horizontal === "start")) {
            canvasColorScale.style.left = "0px";
            canvasColorScale.style.right = "0px";
            canvasColorScale.style.bottom = "0px";
        }
        if ((colorScaleOptions.position?.vertical === "bottom") && (colorScaleOptions.position?.horizontal === "end")) {
            canvasColorScale.style.bottom = "0px";
            canvasColorScale.style.right = "0px";
        }
        if ((colorScaleOptions.position?.vertical === "top") && (colorScaleOptions.position?.horizontal === "center")) {
            canvasColorScale.style.margin = "auto";
            canvasColorScale.style.marginTop = "10px";
            canvasColorScale.style.left = "0px";
            canvasColorScale.style.right = "0px";
        }
        if ((colorScaleOptions.position?.vertical === "bottom") && (colorScaleOptions.position?.horizontal === "center")) {
            canvasColorScale.style.margin = "auto";
            canvasColorScale.style.left = "0px";
            canvasColorScale.style.right = "0px";
            canvasColorScale.style.bottom = "0px";
            canvasColorScale.style.marginBottom = "10px";
        }
    }

    /*
    private setSiblingElementStyles(parent: string, dimensions: {width: number, height: number}) {
        this._heatmapLogger.log("__SimpleHeatmap__ setSiblingElementStyles", dimensions);
        const {width, height} = dimensions;
        const element = document.getElementById(parent).firstElementChild as HTMLElement;
        element.style.width = width.toString() + "px";
        element.style.height = height.toString() + "px";
        element.style.position = "absolute";
        element.style.zIndex = "1";
    }

    private setCanvasElementStyles(dimensions: {width: number, height: number}) {
        this._heatmapLogger.log("__SimpleHeatmap__ setCanvasElementStyles", dimensions);
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
            this._heatmapLogger.error("__SimpleHeatmap__ ERROR -> Canvas dimensions are zero.");
        }
    }
    */

    private _getElementDimensions(element: string) {
        const el: HTMLElement = document.getElementById(element) as HTMLElement;
        const compStyles = window.getComputedStyle(el);
        const width = (typeof el.style.width !== 'undefined' && el.style.width !== null && el.style.width !== '')
        ? parseInt(el.style.width) : parseInt(compStyles.getPropertyValue('width'));
        const height = (typeof el.style.height !== 'undefined' && el.style.height !== null && el.style.height !== '')
        ? parseInt(el.style.height) : parseInt(compStyles.getPropertyValue('height'));
        return {width: width, height: height};
    }

    private _addHeatmapLayer2Element(element: string) {
        const el: HTMLElement = document.getElementById(element) as HTMLElement;
        if (el !== null) {

            const {width, height} = this._getElementDimensions(element);

            // Update element styles.
            el.style.position = "absolute";
            el.style.zIndex = "1";

            if (document.getElementById('heatmapLayer') !== null) {
                const heatmapLayer: HTMLElement = document.getElementById('heatmapLayer') as HTMLElement;
                heatmapLayer.parentElement!.removeChild(heatmapLayer);
                // this._canvas = null;
            }

            // Set canvas styles.
            this._canvas = document.createElement('canvas');
            this._canvas.id = "heatmapLayer";
            this._canvas.width = width;
            this._canvas.height = height;
            this._canvas.style.position = "relative";
            this._canvas.style.zIndex = "99999";
            // this._canvas.style.pointerEvents = "none";

            if (el.parentElement !== null) {
                el.parentElement.appendChild(this._canvas);
            }
            else {
                this._heatmapLogger.error("__SimpleHeatmap__  ERROR -> Element has no parent.");
            }
        }
        else {
            this._heatmapLogger.error("__SimpleHeatmap__  ERROR -> Element doesn't exist.");
        }
    }

    private _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

}