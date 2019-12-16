import { HeatmapData, IHeatmapOptions, HeatmapGradient, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint, GMHeatmapPoint } from "./models/models";

declare module "@capacitor/core" {
  interface PluginRegistry {
    Heatmap: HeatmapPlugin;
  }
}

export interface HeatmapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  initialize(options: IHeatmapOptions | IGMHeatmapOptions): Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}>;
  destroy(): Promise<{value: HTMLCanvasElement}>;
  /*********/
  // Methods for handling heatmap data.
  /*********/
  setData(data: HeatmapData | GMHeatmapData): Promise<{value: HeatmapData | GMHeatmapData}>;
  getData(): Promise<{value: HeatmapData | GMHeatmapData}>;
  getValueAt(position: Array<number>): Promise<{value: number}>;
  clearData(): Promise<{value: HeatmapData | GMHeatmapData}>;
  addPoint(point: HeatmapPoint | GMHeatmapPoint): Promise<{value: HeatmapData | GMHeatmapData}>;
  setMax(max: number): Promise<{value: number}>
  /*********/
  // Methods for rendering heatmap.
  /*********/
  draw(options: {opacity?: number, radius?: number, data?:  HeatmapData | GMHeatmapData}): Promise<{value: boolean}>;
  /*********/
  // Methods for handling heatmap appearance.
  /*********/
  resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}>;
  gradient(grad: HeatmapGradient): Promise<{value: Uint8ClampedArray}>;
  opacity(opa: number): Promise<{value: number}>;
  /*********/
  // Method to obtain the image of the canvas.
  /*********/
  getDataURL(type: string, imageQuality: number): Promise<{value: string}>;
}
