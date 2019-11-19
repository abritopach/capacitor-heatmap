import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';

import { Log } from './log';

export class HeatmapWeb extends WebPlugin implements HeatmapPlugin {

  _canvas: HTMLCanvasElement;
  _ctx: CanvasRenderingContext2D;
  _width: number;
  _height: number;
  _max: number;
  // _data: any[];
  _data: Array<Array<number>>;
  _circle: HTMLCanvasElement;
  _heatmapLogger: any;
  _grad: any;
  _r: number;

  defaultGradient: any = {
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

  async initialize(options: {canvas: string | HTMLCanvasElement, data?: Array<Array<number>>, debug?: boolean}): Promise<{value: HTMLCanvasElement}> {
    this._heatmapLogger = new Log(options.debug);
    this._heatmapLogger.log("initialize");
    this._canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) as HTMLCanvasElement : options.canvas;
    if ((this._canvas !== null) && (typeof this._canvas !== 'undefined')) {
      this._ctx = this._canvas.getContext('2d');
      this._width = this._canvas.width;
      this._height = this._canvas.height;
      // this._max = 1;
      this._max = 18;
      this._data = typeof options.data !== 'undefined' ? options.data :
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

  /*********/

  // Methods for handling heatmap data.

  /*********/

  async setData(data: Array<Array<number>>): Promise<{value: any[]}> {
    this._heatmapLogger.log("setData");
    this._data = data;
    return {value: this._data};
  }

  async clearData(): Promise<{value: any[]}> {
    this._heatmapLogger.log("clearData");
    this._data = [];
    return {value: this._data};
  }

  async addPoint(point: any): Promise<{value: any[]}> {
    this._heatmapLogger.log("addPoint", {newPoint: point});
    this._data.push(point);
    return {value: this._data};
  }

  /*********/

  // Methods for rendering heatmap.

  /*********/

  async draw(options: {minOpacity?: number, data?: Array<Array<number>>}): Promise<{value: boolean}> {
    this._heatmapLogger.log("draw");

    if ( typeof options.data !== 'undefined') this._data = options.data;

    if (!this._circle) this.radius(HeatmapWeb.DEFAULT_RADIUS);
    if (!this._grad) this.gradient(this.defaultGradient);

    this._heatmapLogger.log("circle", {circle: this._circle});

    const ctx = this._ctx;
    ctx.clearRect(0, 0, this._width, this._height);

    // Draw a grayscale heatmap by putting a blurred circle at each data point.
    this._data.map(point => {
      this._heatmapLogger.log("data", {point: point});
      ctx.globalAlpha = Math.min(Math.max(point[2] / this._max, options.minOpacity === undefined ? 0.05 : options.minOpacity), 1);
      ctx.drawImage(this._circle, point[0] - 25, point[1] - 25);
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
    this.clearCanvas();
    this._width = options.width;
    this._height = options.height;
    const opt = {};
    this.draw(opt);
    return {value: {newWidth: this._canvas.width, newHeight: this._canvas.height}};
  }


  /*********/
  // Private methods.
  /*********/

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

  private gradient (grad: any) {
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
