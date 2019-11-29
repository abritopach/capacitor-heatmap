import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';

import { Log } from './log';

import { HeatmapPoint, HeatmapData, HeatmapGradient, IHeatmapOptions } from './models/models';

export class HeatmapWeb extends WebPlugin implements HeatmapPlugin {

  _canvas: HTMLCanvasElement;
  _ctx: CanvasRenderingContext2D;
  _width: number;
  _height: number;
  _max: number;
  _data: HeatmapData;
  _circle: HTMLCanvasElement;
  _heatmapLogger: any;
  _grad: Uint8ClampedArray;
  _r: number;

  static readonly DEFAULT_GRADIENT: HeatmapGradient = {
    0.4: 'blue',
    0.6: 'cyan',
    0.7: 'lime',
    0.8: 'yellow',
    1.0: 'red'
  };
  static readonly DEFAULT_RADIUS = 25;

  constructor() {
    super({
      name: 'Heatmap',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async initialize(options: IHeatmapOptions): Promise<{value: HTMLCanvasElement}> {
    this._heatmapLogger = new Log(options.debug);
    this._heatmapLogger.log("initialize");
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
    return {value: this._canvas};
  }

  async destroy(): Promise<{value: HTMLCanvasElement}> {
    this.clearCanvas();
    this._canvas = null;
    this._width = 0;
    this._height = 0;
    this._max = 0;
    this._data = [];
    this._circle = null;
    this._grad = null;
    this._r = 0;
    return {value: this._canvas};
  }

  /*********/

  // Methods for handling heatmap data.

  /*********/

  async setData(data: HeatmapData): Promise<{value: HeatmapData}> {
    this._heatmapLogger.log("setData");
    this._data = data;
    return {value: this._data};
  }

  async clearData(): Promise<{value: HeatmapData}> {
    this._heatmapLogger.log("clearData");
    this._data = [];
    return {value: this._data};
  }

  async addPoint(point: Array<number>): Promise<{value: HeatmapData}> {
    this._heatmapLogger.log("addPoint", {newPoint: point});
    this._data.push(point);
    return {value: this._data};
  }

  async setMax(max: number): Promise<{value: number}> {
    this._max = max;
    return {value: this._max};
  }

  /*********/

  // Methods for rendering heatmap.

  /*********/

  async draw(options: {minOpacity?: number, data?: HeatmapData}): Promise<{value: boolean}> {
    this._heatmapLogger.log("draw");

    if ( typeof options.data !== 'undefined') this._data = options.data;
    this._heatmapLogger.log("draw", {length: this._data.length});

    if (!this._circle) this.radius(HeatmapWeb.DEFAULT_RADIUS);
    if (!this._grad) this.gradient(HeatmapWeb.DEFAULT_GRADIENT);

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
      ctx.globalAlpha = Math.min(Math.max(thickness / this._max, options.minOpacity === undefined ? 0.05 : options.minOpacity), 1);
      ctx.drawImage(this._circle, x - this._r, y - this._r);
    });

    // Colorize the heatmap, using opacity value of each pixel to get the right color from our gradient.
    const colored = ctx.getImageData(0, 0, this._width, this._height);
    this._heatmapLogger.log("colored", {colored: colored});
    this._colorize(colored.data, this._grad);
    ctx.putImageData(colored, 0, 0);

    return {value: true};
  }

  /*********/
  // Methods for handling heatmap appearance.
  /*********/
  async resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}> {
    this._heatmapLogger.log("resize", {options: options});
    this.clearCanvas();
    this._canvas.width = options.width;
    this._canvas.height = options.height;
    this._width = this._canvas.width;
    this._height = this._canvas.height;
    const opt = {};
    await this.draw(opt);
    return {value: {newWidth: this._canvas.width, newHeight: this._canvas.height}};
  }

  async gradient(grad: HeatmapGradient): Promise<{value: Uint8ClampedArray}> {
    this._heatmapLogger.log("gradient", {grad: grad});
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
    this._heatmapLogger.log("gradient", {canvas: canvas, ctx: ctx});
    return {value: this._grad};
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

  private clearCanvas() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  private radius(r: number, blur?: number) {
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

  private _colorize (pixels: any, gradient: any) {
    this._heatmapLogger.log("_colorize", {pixels: pixels, gradient: gradient});
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
    this._heatmapLogger.log("_createCanvas");
    if (typeof document !== 'undefined') {
        return document.createElement('canvas');
    }
  }

}

const Heatmap = new HeatmapWeb();

export { Heatmap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
