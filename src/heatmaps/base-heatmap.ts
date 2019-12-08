import { HeatmapData, IHeatmapOptions, HeatmapGradient, IHeatmapType, IGMHeatmapOptions } from '../models/models';

export abstract class BaseHeatmap {

    static readonly DEFAULT_GRADIENT: HeatmapGradient = {
        0.4: 'blue',
        0.6: 'cyan',
        0.7: 'lime',
        0.8: 'yellow',
        1.0: 'red'
    };
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

    abstract getCanvas(): void;
    abstract initialize(options: IHeatmapOptions | IGMHeatmapOptions): void;
    abstract destroy(): void;
    /*********/
    // Methods for handling heatmap data.
    /*********/
    abstract setData(data: HeatmapData): void;
    abstract getData(): void;
    abstract getValueAt(position: Array<number>): void;
    abstract clearData(): void;
    abstract addPoint(point: Array<number>): void;
    abstract setMax(max: number): void;
    /*********/
    // Methods for rendering heatmap.
    /*********/
    abstract draw(options: {minOpacity?: number, data?: HeatmapData}): void;
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    abstract resize(options: {width: number, height: number}): void;
    abstract gradient(grad: HeatmapGradient): void;
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    abstract getDataURL(type: string, imageQuality: number): void;

}