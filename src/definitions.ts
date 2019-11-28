import { HeatmapData } from "./models/models";

declare module "@capacitor/core" {
  interface PluginRegistry {
    Heatmap: HeatmapPlugin;
  }
}

export interface HeatmapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  initialize(options: {canvas: string | HTMLCanvasElement, data?: HeatmapData, debug?: boolean,
  overlap?: {parent: string}}): Promise<{value: HTMLCanvasElement}>;
  /*********/
  // Methods for handling heatmap data.
  /*********/
  setData(data: HeatmapData): Promise<{value: HeatmapData}>;
  clearData(): Promise<{value: HeatmapData}>;
  addPoint(point: Array<number>): Promise<{value: HeatmapData}>;
  /*********/
  // Methods for rendering heatmap.
  /*********/
  draw(options: {minOpacity?: number, data?: HeatmapData}): Promise<{value: boolean}>;
  /*********/
  // Methods for handling heatmap appearance.
  /*********/
  resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}>;
}
