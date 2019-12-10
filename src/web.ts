import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';

import { HeatmapData, HeatmapGradient, IHeatmapOptions, IHeatmapType, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint, GMHeatmapPoint } from './models/models';

import { SimpleHeatmap } from './heatmaps/simple-heatmap';
import { GoogleMapsHeatmap } from './heatmaps/google-maps-heatmap';

export class HeatmapWeb extends WebPlugin implements HeatmapPlugin {

  heatmap: any;

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

  async getCanvas(): Promise<{value: HTMLCanvasElement}> {
    return {value: this.heatmap.getCanvas()};
  }

  async initialize(options: (IHeatmapOptions | IGMHeatmapOptions)): Promise<{value: HTMLCanvasElement}> {
    const type = typeof options.type !== "undefined" ? options.type : IHeatmapType.Simple;
    switch(type) {
      case IHeatmapType.Simple: {
        this.heatmap = new SimpleHeatmap();
        break;
      }
      case IHeatmapType.GoogleMaps: {
        this.heatmap = new GoogleMapsHeatmap();
        break;
      }
      case IHeatmapType.LeafletMaps: {
        break;
      }
      default: {
        this.heatmap = new SimpleHeatmap();
        break;
      }
    }
    return {value: this.heatmap.initialize(options)};
  }

  async destroy(): Promise<{value: HTMLCanvasElement}> {
    return {value: this.heatmap.destroy()};
  }

  /*********/

  // Methods for handling heatmap data.

  /*********/

  async setData(data: HeatmapData | GMHeatmapData): Promise<{value: HeatmapData}> {
    return {value: this.heatmap.setData(data)};
  }

  async getData(): Promise<{value: HeatmapData}> {
    return {value: this.heatmap.getData()};
  }

  async getValueAt(position: Array<number>): Promise<{value: number}> {
    return {value: this.heatmap.getValueAt(position)};
  }

  async clearData(): Promise<{value: HeatmapData}> {
    return {value: this.heatmap.clearData()};
  }

  async addPoint(point: HeatmapPoint | GMHeatmapPoint): Promise<{value: HeatmapData}> {
    return {value: this.heatmap.addPoint(point)};
  }

  async setMax(max: number): Promise<{value: number}> {
    return {value: this.heatmap.setMax(max)};
  }

  /*********/

  // Methods for rendering heatmap.

  /*********/

  async draw(options: {minOpacity?: number, data?: HeatmapData} | {minOpacity?: number, data?: GMHeatmapData}): Promise<{value: boolean}> {
    return {value: this.heatmap.draw(options)};
  }

  /*********/

  // Methods for handling heatmap appearance.

  /*********/

  async resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}> {
    return {value: this.heatmap.resize(options)};
  }

  async gradient(grad: HeatmapGradient): Promise<{value: Uint8ClampedArray}> {
    return {value: this.heatmap.gradient(grad)};
  }

  /*********/

  // Method to obtain the image of the canvas.

  /*********/

  async getDataURL(type: string, imageQuality: number): Promise<{value: string}> {
    return {value: this.heatmap.getDataURL(type, imageQuality)};
  }


}

const Heatmap = new HeatmapWeb();

export { Heatmap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
