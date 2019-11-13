import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';

import { Log } from './log';

export class HeatmapWeb extends WebPlugin implements HeatmapPlugin {

  _canvas: any;
  _ctx: any;
  _width: number;
  _height: number;
  _max: number;
  _data: any[];
  _circle: any;
  _heatmapLogger: any;

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

  async createHeatmap(options: {canvas: string | HTMLCanvasElement, data: any[], debug?: boolean}): Promise<{value: HTMLCanvasElement}> {
    this._heatmapLogger = new Log(options.debug);
    this._heatmapLogger.log("createHeatmap");
    this._canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) : options.canvas;
    if ((this._canvas !== null) && (typeof this._canvas !== 'undefined')) {
      this._ctx = this._canvas.getContext('2d');
      this._width = this._canvas.width;
      this._height = this._canvas.height;
      this._max = 1;
      this._data = options.data;
    }
    return this._canvas;
  }

  async draw(minOpacity?: number) {
    this._heatmapLogger.log("draw");
    this._circle = this._createCanvas();

    const ctx = this._ctx;
    ctx.clearRect(0, 0, this._width, this._height);

    // Draw a grayscale heatmap by putting a blurred circle at each data point.
    this._data.map(point => {
      this._heatmapLogger.log("data", {point: point});
      ctx.globalAlpha = Math.min(Math.max(point[2] / this._max, minOpacity === undefined ? 0.05 : minOpacity), 1);
      ctx.drawImage(this._circle, point[0] - 25, point[1] - 25);
    });
  }

  private _createCanvas() {
    if (typeof document !== 'undefined') {
        return document.createElement('canvas');
    }
}

}

const Heatmap = new HeatmapWeb();

export { Heatmap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
