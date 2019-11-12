import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';

export class HeatmapWeb extends WebPlugin implements HeatmapPlugin {

  _canvas: any;
  _ctx: any;
  _width: number;
  _height: number;
  _max: number;
  _data: any[];

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

  async createHeatmap(options: {canvas: string | HTMLCanvasElement}): Promise<{value: HTMLCanvasElement}> {
    this._canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) : options.canvas;
    this._ctx = this._canvas.getContext('2d');
    this._width = this._canvas.width;
    this._height = this._canvas.height;
    this._max = 1;
    this._data = [];
    return this._canvas;
  }

}

const Heatmap = new HeatmapWeb();

export { Heatmap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
