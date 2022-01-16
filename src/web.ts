import { WebPlugin } from '@capacitor/core';

import type { HeatmapPlugin } from './definitions';
import { GoogleMapsHeatmap } from './heatmaps/google-maps-heatmap';
import { LeafletMapsHeatmap } from './heatmaps/leaflet-maps-heatmap';
import { MapboxMapsHeatmap } from './heatmaps/mapbox-maps-heatmap';
import { SimpleHeatmap } from './heatmaps/simple-heatmap';
import type { HeatmapData, HeatmapGradient, HeatmapOptions, GMHeatmapOptions, GMHeatmapData, HeatmapPoint,
        GMHeatmapPoint, HeatmapDrawOptions, GMHeatmapGradient, HeatmapPosition, GMHeatmapCoordinate,
        LMHeatmapOptions, LMHeatmapData, LMHeatmapPoint, LMHeatmapCoordinate, MapboxHeatmapOptions, MapboxHeatmapData, MapboxHeatmapCoordinate, MapBoxHeatmapPoint } from './models/models';
import { HeatmapType } from './models/models';


export class HeatmapWeb extends WebPlugin implements HeatmapPlugin {

  heatmap: any;

  async initialize(options: (HeatmapOptions | GMHeatmapOptions | LMHeatmapOptions | MapboxHeatmapOptions)): Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}> {
    const type = typeof options.type !== "undefined" ? options.type : HeatmapType.Simple;
    switch(type) {
      case HeatmapType.Simple: {
        this.heatmap = new SimpleHeatmap();
        break;
      }
      case HeatmapType.GoogleMaps: {
        this.heatmap = new GoogleMapsHeatmap();
        break;
      }
      case HeatmapType.LeafletMaps: {
        this.heatmap = new LeafletMapsHeatmap();
        break;
      }
      case HeatmapType.MapboxMaps: {
        this.heatmap = new MapboxMapsHeatmap();
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

  async setData(data: HeatmapData | GMHeatmapData | LMHeatmapData | MapboxHeatmapData): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.setData(data)};
  }

  async getData(): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.getData()};
  }

  async getValueAt(position: HeatmapPosition | GMHeatmapCoordinate | LMHeatmapCoordinate | MapboxHeatmapCoordinate): Promise<{value: number}> {
    return {value: this.heatmap.getValueAt(position)};
  }

  async clearData(): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData}> {
    return {value: this.heatmap.clearData()};
  }

  async addPoint(point: HeatmapPoint | GMHeatmapPoint | LMHeatmapPoint | MapBoxHeatmapPoint): Promise<{value: HeatmapData | GMHeatmapData | LMHeatmapData | MapboxHeatmapData}> {
    return {value: this.heatmap.addPoint(point)};
  }

  async setMax(max: number): Promise<{value: number}> {
    return {value: this.heatmap.setMax(max)};
  }

  /*********/

  // Methods for rendering heatmap.

  /*********/

  async draw(options: HeatmapDrawOptions): Promise<{value: boolean}> {
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
