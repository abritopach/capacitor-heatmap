import { HeatmapData, IHeatmapOptions, HeatmapGradient, IHeatmapType, IGMHeatmapOptions, GMHeatmapData, HeatmapPoint } from '../models/models';
export declare abstract class BaseHeatmap {
    static readonly DEFAULT_GRADIENT: HeatmapGradient;
    static readonly DEFAULT_RADIUS = 25;
    static readonly DEFAULT_TYPE = IHeatmapType.Simple;
    _canvas: HTMLCanvasElement;
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;
    _max: number;
    _data: HeatmapData;
    _circle: HTMLCanvasElement;
    _heatmapLogger: any;
    _grad: Uint8ClampedArray;
    _r: number;
    abstract initialize(options: IHeatmapOptions | IGMHeatmapOptions): void;
    abstract destroy(): void;
    /*********/
    /*********/
    abstract setData(data: HeatmapData | GMHeatmapData): void;
    abstract getData(): void;
    abstract getValueAt(position: Array<number>): void;
    abstract clearData(): void;
    abstract addPoint(point: HeatmapPoint): void;
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
