declare module "@capacitor/core" {
  interface PluginRegistry {
    Heatmap: HeatmapPlugin;
  }
}

export interface HeatmapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  initialize(options: {canvas: string | HTMLCanvasElement, data?: any[], debug?: boolean}): Promise<{value: HTMLCanvasElement}>;
  /*********/
  // Methods for handling heatmap data.
  /*********/
  setData(data: any[]): Promise<{value: any[]}>;
  clearData(): Promise<{value: any[]}>;
  addPoint(point: any): Promise<{value: any[]}>;
  /*********/
  // Methods for rendering heatmap.
  /*********/
  draw(options: {minOpacity?: number, data?: any[]}): Promise<{value: boolean}>;
  /*********/
  // Methods for handling heatmap appearance.
  /*********/
  resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}>;
}
