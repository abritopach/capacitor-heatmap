import { HeatmapData, IHeatmapOptions, HeatmapGradient } from "./models/models";

declare module "@capacitor/core" {
  interface PluginRegistry {
    Heatmap: HeatmapPlugin;
  }
}

export interface HeatmapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  initialize(options: IHeatmapOptions): Promise<{value: HTMLCanvasElement}>;
  destroy(): Promise<{value: HTMLCanvasElement}>;
  /*********/
  // Methods for handling heatmap data.
  /*********/
  setData(data: HeatmapData): Promise<{value: HeatmapData}>;
  getData(): Promise<{value: HeatmapData}>;
  getValueAt(position: Array<number>): Promise<{value: number}>;
  clearData(): Promise<{value: HeatmapData}>;
  addPoint(point: Array<number>): Promise<{value: HeatmapData}>;
  setMax(max: number): Promise<{value: number}>
  /*********/
  // Methods for rendering heatmap.
  /*********/
  draw(options: {minOpacity?: number, data?: HeatmapData}): Promise<{value: boolean}>;
  /*********/
  // Methods for handling heatmap appearance.
  /*********/
  resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}>;
  gradient(grad: HeatmapGradient): Promise<{value: Uint8ClampedArray}>;
  /*********/
  // Method to obtain the image of the canvas.
  /*********/
  getDataURL(type: string, imageQuality: number): Promise<{value: string}>;
}
