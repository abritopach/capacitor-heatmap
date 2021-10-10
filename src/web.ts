import { WebPlugin } from '@capacitor/core';
import { HeatmapPlugin } from './definitions';

import { HeatmapData, HeatmapGradient, IHeatmapOptions, IHeatmapType, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint,
        GMHeatmapPoint, IHeatmapDrawOptions, GMHeatmapGradient, HeatmapPosition, GMHeatmapCoordinate, ILMHeatmapOptions, LMHeatmapData, LMHeatmapPoint, LMHeatmapCoordinate } from './models/models';

import { SimpleHeatmap } from './heatmaps/simple-heatmap';
import { GoogleMapsHeatmap } from './heatmaps/google-maps-heatmap';
import { LeafletMapsHeatmap } from './heatmaps/leaflet-maps-heatmap';

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

  async initialize(options: (IHeatmapOptions | IGMHeatmapOptions | ILMHeatmapOptions)): Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}> {
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
        this.heatmap = new LeafletMapsHeatmap();
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

  async setData(data: HeatmapData | GMHeatmapData | LMHeatmapData): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.setData(data)};
  }

  async getData(): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.getData()};
  }

  async getValueAt(position: HeatmapPosition | GMHeatmapCoordinate | LMHeatmapCoordinate): Promise<{value: number}> {
    return {value: this.heatmap.getValueAt(position)};
  }

  async clearData(): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.clearData()};
  }

  async addPoint(point: HeatmapPoint | GMHeatmapPoint | LMHeatmapPoint): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.addPoint(point)};
  }

  async setMax(max: number): Promise<{value: number}> {
    return {value: this.heatmap.setMax(max)};
  }

  /*********/

  // Methods for rendering heatmap.

  /*********/

  async draw(options: IHeatmapDrawOptions): Promise<{value: boolean}> {
    return {value: this.heatmap.draw(options)};
  }

  /*********/

  // Methods for handling heatmap appearance.

  /*********/

  async resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}> {
    return {value: this.heatmap.resize(options)};
  }

  async gradient(grad: HeatmapGradient | GMHeatmapGradient): Promise<{value: Uint8ClampedArray | GMHeatmapGradient}> {
    return {value: this.heatmap.gradient(grad)};
  }

  async opacity(opa: number): Promise<{value: number}> {
    return {value: this.heatmap.opacity(opa)};
  }

  async radius(rad: number): Promise<{value: number}> {
    return {value: this.heatmap.radius(rad)};
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
