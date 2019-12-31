import { BaseHeatmap } from './base-heatmap';
import { Log } from "../log";
import { GMHeatmapData, GMHeatmapCoordinate, GMHeatmapPoint, GMHeatmapGradient, ILMHeatmapOptions } from '../models/models';

import { Map, DomUtil, Browser } from 'leaflet';

export class LeafletMapsHeatmap extends BaseHeatmap {

    _map: Map;
    _canvas: HTMLCanvasElement;

    initialize(options: ILMHeatmapOptions): HTMLCanvasElement {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__LeafletMapsHeatmap__ initialize");
        // TODO
        this._map = options.map;
        console.log('map', this._map);

        const canvas: HTMLCanvasElement = this._canvas = DomUtil.create('canvas', 'leaflet-heatmap-layer leaflet-layer') as HTMLCanvasElement;

        // const originProp = DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
        // canvas.style['transformOrigin'] = '50% 50%';

        const size = this._map.getSize();
        console.log('size', size);
        canvas.width  = size.x;
        canvas.height = size.y;

        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const animated = this._map.options.zoomAnimation && Browser.any3d;
        DomUtil.addClass(canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));

        console.log('panes', this._map.getPanes());

        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        DomUtil.setPosition(this._canvas, topLeft);

        this._map.getPanes().overlayPane.appendChild(this._canvas);
        // map.getPane('labels').style.pointerEvents = 'none';

        return this._canvas;

    }

    destroy(): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ destroy");
        // TODO
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: GMHeatmapData): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ setData", data);
        // TODO
    }

    getData(): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ getData");
        // TODO
    }

    getValueAt(coordinate: GMHeatmapCoordinate): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ getValueAt", coordinate);
        // TODO
    }

    clearData(): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ clearData");
        // TODO
    }

    addPoint(point: GMHeatmapPoint): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ addPoint", {newPoint: point});
        // TODO
    }

    setMax(max: number): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ max", max);
        // TODO
    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: GMHeatmapData}): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ draw", options);
        // TODO
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ resize", options);
        // TODO
    }

    gradient(grad: GMHeatmapGradient): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ gradient", grad);
        // TODO
    }

    opacity(opa: number): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ opacity", opa);
        // TODO
    }

    radius(rad: number): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ radius", rad);
        // TODO
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type: string, imageQuality: number): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ getDataURL", type, imageQuality);
        // TODO
    }
}