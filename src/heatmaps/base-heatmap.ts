import { HeatmapData, IHeatmapOptions } from '../models/models';

export abstract class BaseHeatmap {

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

    abstract initialize(options: IHeatmapOptions): void;
    abstract draw(options: {minOpacity?: number, data?: HeatmapData}): void;
}