import type { HeatmapData, IHeatmapOptions, HeatmapGradient, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint, GMHeatmapPoint, IHeatmapDrawOptions, GMHeatmapGradient, HeatmapPosition, GMHeatmapCoordinate, ILMHeatmapOptions, LMHeatmapData, LMHeatmapPoint } from '../models/models';
import { IHeatmapType } from '../models/models';

export abstract class BaseHeatmap {

    static readonly DEFAULT_TYPE = IHeatmapType.Simple;

    _heatmapLogger: any;

    abstract initialize(options: IHeatmapOptions | IGMHeatmapOptions | ILMHeatmapOptions): void;
    abstract destroy(): void;
    /*********/
    // Methods for handling heatmap data.
    /*********/
    abstract setData(data: HeatmapData | GMHeatmapData | LMHeatmapData): void;
    abstract getData(): void;
    abstract getValueAt(position: HeatmapPosition | GMHeatmapCoordinate): void;
    abstract clearData(): void;
    abstract addPoint(point: HeatmapPoint | GMHeatmapPoint | LMHeatmapPoint): void;
    abstract setMax(max: number): void;
    /*********/
    // Methods for rendering heatmap.
    /*********/
    abstract draw(options: IHeatmapDrawOptions): void;
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