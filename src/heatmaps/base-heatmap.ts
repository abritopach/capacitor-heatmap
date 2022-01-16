import { Log } from '../log';
import type { HeatmapData, HeatmapOptions, HeatmapGradient, GMHeatmapOptions, GMHeatmapData, HeatmapPoint,
    GMHeatmapPoint, HeatmapDrawOptions, GMHeatmapGradient, HeatmapPosition, GMHeatmapCoordinate, LMHeatmapOptions,
    LMHeatmapData, LMHeatmapPoint, MapboxHeatmapOptions, MapboxHeatmapData, MapboxHeatmapCoordinate, MapBoxHeatmapPoint } from '../models/models';
import { HeatmapType } from '../models/models';

export abstract class BaseHeatmap {

    static readonly DEFAULT_TYPE = HeatmapType.Simple;

    _heatmapLogger: Log = new Log();

    abstract initialize(options: HeatmapOptions | GMHeatmapOptions | LMHeatmapOptions | MapboxHeatmapOptions): void;
    abstract destroy(): void;
    /*********/
    // Methods for handling heatmap data.
    /*********/
    abstract setData(data: HeatmapData | GMHeatmapData | LMHeatmapData | MapboxHeatmapData): void;
    abstract getData(): void;
    abstract getValueAt(position: HeatmapPosition | GMHeatmapCoordinate | MapboxHeatmapCoordinate): void;
    abstract clearData(): void;
    abstract addPoint(point: HeatmapPoint | GMHeatmapPoint | LMHeatmapPoint | MapBoxHeatmapPoint): void;
    abstract setMax(max: number): void;
    /*********/
    // Methods for rendering heatmap.
    /*********/
    abstract draw(options: HeatmapDrawOptions): void;
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    abstract resize(options: {width: number, height: number}): void;
    abstract gradient(grad: HeatmapGradient | GMHeatmapGradient): void;
    abstract opacity(opa: number): void;
    abstract radius(rad: number): void;
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    abstract getDataURL(type: string, imageQuality: number): void;
}