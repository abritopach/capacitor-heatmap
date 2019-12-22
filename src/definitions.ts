import { HeatmapData, IHeatmapOptions, HeatmapGradient, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint,
GMHeatmapPoint, IHeatmapDrawOptions, GMHeatmapGradient, HeatmapPosition, GMHeatmapCoordinate } from "./models/models";

declare module "@capacitor/core" {
  interface PluginRegistry {
    Heatmap: HeatmapPlugin;
  }
}

export interface HeatmapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;

  /**
   * Description [This method initialize heatmap.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name initialize
   * @param {IHeatmapOptions | IGMHeatmapOptions} options - Json options object to initialize heatmap.
   * @returns {Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}>} Canvas Element or Google Maps Heatmap Layer.
  */
  initialize(options: IHeatmapOptions | IGMHeatmapOptions): Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}>;

   /**
   * Description [This method destroy heatmap.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name destroy
   * @returns {Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}>} Canvas Element or Google Maps Heatmap Layer.
  */
  destroy(): Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}>;


  /*********/
  // Methods for handling heatmap data.
  /*********/

   /**
   * Description [This method set heatmap data of [[x, y, thickness], ...] or [{x: value, y: value, thickness: value},...] format.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name setData
   * @param {HeatmapData | GMHeatmapData} data - Data to set.
   * @returns {Promise<{value: HTMLCanvasElement | google.maps.visualization.HeatmapLayer}>} Canvas Element or Google Maps Heatmap Layer.
  */
  setData(data: HeatmapData | GMHeatmapData): Promise<{value: HeatmapData | GMHeatmapData}>;

  /**
   * Description [This method get heatmap data of [[x, y, thickness], ...] or [{x: value, y: value, thickness: value},...] format.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name getData
   * @returns {Promise<{value: HeatmapData | GMHeatmapData}>} Heatmap data.
  */
  getData(): Promise<{value: HeatmapData | GMHeatmapData}>;
  getValueAt(position: HeatmapPosition | GMHeatmapCoordinate): Promise<{value: number}>;

  /**
   * Description [This method clear heatmap data.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name clearData
   * @returns {Promise<{value: HeatmapData | GMHeatmapData}>} Heatmap data.
  */
  clearData(): Promise<{value: HeatmapData | GMHeatmapData}>;

  /**
   * Description [This method add new point to heatmap data.]
   *
   * @author abrito
   * @version 0.0.1
   * @param {HeatmapPoint | GMHeatmapPoint} point - New point to add to heatmap data.
   * @method
   * @name addPoint
   * @returns {Promise<{value: HeatmapData | GMHeatmapData}>} Heatmap data.
  */
  addPoint(point: HeatmapPoint | GMHeatmapPoint): Promise<{value: HeatmapData | GMHeatmapData}>;

  /**
   * Description [This method set max data value (1 by default).]
   *
   * @author abrito
   * @version 0.0.1
   * @param {number} max - Max value.
   * @method
   * @name setMax
   * @returns {Promise<{value: number}>} Max value.
  */
  setMax(max: number): Promise<{value: number}>


  /*********/
  // Methods for rendering heatmap.
  /*********/

  /**
   * Description [This method draw heatmap.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name draw
   * @param {IHeatmapDrawOptions} options - Json options object to draw heatmap.
   * @returns {Promise<{value: boolean}>} Boolean value.
  */
  draw(options: IHeatmapDrawOptions): Promise<{value: boolean}>;


  /*********/
  // Methods for handling heatmap appearance.
  /*********/

  /**
   * Description [This method resize heatmap.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name resize
   * @param {width: number, height: number} options - Json options object with new heatmap dimensions.
   * @returns {Promise<{value: {newWidth: number, newHeight: number}}>} New dimensions.
  */
  resize(options: {width: number, height: number}): Promise<{value: {newWidth: number, newHeight: number}}>;

  /**
   * Description [This method set gradient colors.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name gradient
   * @param {HeatmapGradient | GMHeatmapGradient} grad - Gradient for heatmap.
   * @returns {Promise<{value: Uint8ClampedArray | GMHeatmapGradient}>} Gradient.
  */
  gradient(grad: HeatmapGradient | GMHeatmapGradient): Promise<{value: Uint8ClampedArray | GMHeatmapGradient}>;

  /**
   * Description [This method set the opacity of the heatmap, expressed as a number between 0 and 1.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name opacity
   * @param {opa} number - Opacity.
   * @returns {Promise<{value: number}>} New opacity.
  */
  opacity(opa: number): Promise<{value: number}>;

  /**
   * Description [This method set point radius of the heatmap.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name radius
   * @param {rad} number - Radius.
   * @returns {Promise<{value: number}>} New radius.
  */
  radius(rad: number): Promise<{value: number}>;


  /*********/
  // Method to obtain the image of the canvas.
  /*********/

  /**
   * Description [This method obtain the image of the canvas.]
   *
   * @author abrito
   * @version 0.0.1
   *
   * @method
   * @name getDataURL
   * @param {string} type - Type.
   * @param {number} imageQuality - Quality;
   * @returns {Promise<{value: string}>} Returns dataURL string. The returned value is the base64 encoded dataURL of the heatmap instance.
  */
  getDataURL(type: string, imageQuality: number): Promise<{value: string}>;
}
