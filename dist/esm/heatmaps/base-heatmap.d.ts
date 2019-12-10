import { HeatmapData, IHeatmapOptions, HeatmapGradient, IHeatmapType, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint, GMHeatmapPoint } from '../models/models';
export declare abstract class BaseHeatmap {
    static readonly DEFAULT_GRADIENT: HeatmapGradient;
    static readonly DEFAULT_RADIUS = 25;
    static readonly DEFAULT_TYPE = IHeatmapType.Simple;
    _heatmapLogger: any;
    abstract initialize(options: IHeatmapOptions | IGMHeatmapOptions): void;
    abstract destroy(): void;
    /*********/
    /*********/
    abstract setData(data: HeatmapData | GMHeatmapData): void;
    abstract getData(): void;
    abstract getValueAt(position: Array<number>): void;
    abstract clearData(): void;
    abstract addPoint(point: HeatmapPoint | GMHeatmapPoint): void;
    abstract setMax(max: number): void;
    /*********/
    /*********/
    abstract draw(options: {
        minOpacity?: number;
        data?: HeatmapData;
    } | {
        minOpacity?: number;
        data?: GMHeatmapData;
    }): void;
    /*********/
    /*********/
    abstract resize(options: {
        width: number;
        height: number;
    }): void;
    abstract gradient(grad: HeatmapGradient): void;
    /*********/
    /*********/
    abstract getDataURL(type: string, imageQuality: number): void;
}
