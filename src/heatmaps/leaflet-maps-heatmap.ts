import { BaseHeatmap } from './base-heatmap';
import { Log } from "../log";
import { GMHeatmapCoordinate, GMHeatmapPoint, GMHeatmapGradient, ILMHeatmapOptions,
         LMHeatmapData } from '../models/models';

import { Map, DomUtil, Browser, LatLngTuple, Bounds, point, Point } from 'leaflet';

export class LeafletMapsHeatmap extends BaseHeatmap {

    _map: Map;
    _canvas: HTMLCanvasElement;
    _data: LMHeatmapData;

    initialize(options: ILMHeatmapOptions): HTMLCanvasElement {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__LeafletMapsHeatmap__ initialize");
        // TODO
        this._map = options.map;
        console.log('map', this._map);

        this._data = typeof options.data !== 'undefined' ? options.data : [];
        (
            this._heatmapLogger.warn("__LeafletMapsHeatmap__ Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function."),
            []
        );

        this._addHeatmapLayer2Map();

        return this._canvas;

    }

    destroy(): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ destroy");
        // TODO
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: LMHeatmapData): LMHeatmapData {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ setData", data);
        this._data = [];
        this._data = [...data];
        return this._data;
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
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: LMHeatmapData}): boolean {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ draw", options);
        if (!this._map) { return false; }

        this._data = typeof options.data !== 'undefined' ? options.data : this._data;

        const radius = 20;
        const size: Point = this._map.getSize();
        const bounds: Bounds = new Bounds(point([-radius, -radius]), size.add([radius, radius]));
        console.log('bounds', bounds);
        const cellSize = radius / 2;
        const panePos = this._map.getPanes().overlayPane.getBoundingClientRect();
        console.log('panePos', panePos);
        const offsetX = panePos.x % cellSize;
        const offsetY = panePos.y % cellSize;
        console.log('offsetX', offsetX, 'offsetY', offsetY);

        this._data.map((coordinate: LatLngTuple) => {
            const point: Point = this._map.latLngToContainerPoint(coordinate);
            console.log('point', point);

            if (bounds.contains(point)) {
                const x = Math.floor((point.x - offsetX) / cellSize) + 2;
                const y = Math.floor((point.y - offsetY) / cellSize) + 2;
                console.log('x', x, 'y', y);
            }
        })

        return true;
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

    /*********/
    // Private methods.
    /*********/

    _addHeatmapLayer2Map() {
        // const originProp = DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
        // canvas.style['transformOrigin'] = '50% 50%';

        const canvas: HTMLCanvasElement = this._canvas = DomUtil.create('canvas', 'leaflet-heatmap-layer leaflet-layer') as HTMLCanvasElement;
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
    }
}