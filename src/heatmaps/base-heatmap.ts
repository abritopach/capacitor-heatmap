import { HeatmapData, IHeatmapOptions, HeatmapGradient, IHeatmapType, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint, GMHeatmapPoint } from '../models/models';

export abstract class BaseHeatmap {

    static readonly DEFAULT_TYPE = IHeatmapType.Simple;

    _heatmapLogger: any;

    abstract initialize(options: IHeatmapOptions | IGMHeatmapOptions): void;
    abstract destroy(): void;
    /*********/
    // Methods for handling heatmap data.
    /*********/
    abstract setData(data: HeatmapData | GMHeatmapData): void;
    abstract getData(): void;
    abstract getValueAt(position: Array<number>): void;
    abstract clearData(): void;
    abstract addPoint(point: HeatmapPoint | GMHeatmapPoint): void;
    abstract setMax(max: number): void;
    /*********/
    // Methods for rendering heatmap.
    /*********/
    abstract draw(options: {opacity?: number, radius?: number, data?: HeatmapData | GMHeatmapData}): void;
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    abstract resize(options: {width: number, height: number}): void;
    abstract gradient(grad: HeatmapGradient): void;
    abstract opacity(opa: number): void;
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    abstract getDataURL(type: string, imageQuality: number): void;

}