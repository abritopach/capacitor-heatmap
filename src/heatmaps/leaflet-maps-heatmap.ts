import html2canvas from 'html2canvas';
import { DomUtil, Browser, Point } from 'leaflet';
import type { Map, LatLngExpression } from 'leaflet';

import { Logs } from '../constants/constants';
import { Log } from "../log";
import type { GMHeatmapGradient, LMHeatmapOptions, LMHeatmapData, HeatmapPoint,
            HeatmapGradient, LMHeatmapPoint, LMHeatmapCoordinate} from '../models/models';
import { Utils }  from "../utils/utils";

import { BaseHeatmap } from './base-heatmap';

export class LeafletMapsHeatmap extends BaseHeatmap {

    _map!: Map;
    _canvas!: HTMLCanvasElement;
    _data: LMHeatmapData = [];

    static readonly DEFAULT_GRADIENT: HeatmapGradient = {
        0.4: 'blue',
        0.6: 'cyan',
        0.7: 'lime',
        0.8: 'yellow',
        1.0: 'red'
    };
    static readonly DEFAULT_RADIUS = 20;
    static readonly DEFAULT_OPACITY = 0.05;

    _circle!: HTMLCanvasElement;
    _gradArray!: Uint8ClampedArray;
    _r!: number;
    _opacity!: number;
    _gradient!: HeatmapGradient;
    _radius!: number;
    _max!: number;
    _ctx!: CanvasRenderingContext2D;
    _width!: number;
    _height!: number;

    initialize(options: LMHeatmapOptions): HTMLCanvasElement {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.initialize}`);
        this._map = options.map;
        console.log('map', this._map);

        this._data = typeof options.data !== 'undefined' ? options.data :
        (
            this._heatmapLogger.warn(`${Logs.heatmaps.leaflet} Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function.`),
            []
        );

        if (!this._canvas) {
            this._addHeatmapLayer2Map();
        }

        this._ctx = this._canvas.getContext('2d') as CanvasRenderingContext2D;
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._max = 18;
        this._opacity = LeafletMapsHeatmap.DEFAULT_OPACITY;
        this._radius = LeafletMapsHeatmap.DEFAULT_RADIUS;
        const result = Utils.createCircle(this._radius);
        this._circle = result.circle as HTMLCanvasElement;
        this._r = result.radius;
        this._gradient = LeafletMapsHeatmap.DEFAULT_GRADIENT;
        this._gradArray = Utils.gradientArray(this._gradient);

        this._map.on('moveend', () => {
            this._reset();
        });

        if (this._map.options.zoomAnimation && Browser.any3d) {
            this._map.on('zoomanim', (e: any) => {
                this._animateZoom(e);
            });
        }

        this._reset();

        return this._canvas;

    }

    destroy(): void {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.destroy}`);
        this._map.getPanes().overlayPane.removeChild(this._canvas);
        this._map.off('moveend', () => {
            this._reset();
        });
        if (this._map.options.zoomAnimation) {
            console.log('zoomAnimation', this._map.options.zoomAnimation);
            this._map.off('zoomanim', (e: any) => {
                this._animateZoom(e);
            });
        }
    }


    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data: LMHeatmapData): LMHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.setData}`, data);
        this._data = [];
        this._data = [...data];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    getData(): LMHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.getData}`);
        return this._data;
    }

    getValueAt(coordinate: LMHeatmapCoordinate): number | null {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.getValueAt}`, coordinate);
        const value = null;

        const max = this._max === undefined ? 1 : this._max;
        const point: Point = this._map.latLngToContainerPoint(coordinate);
        const cellSize = this._r / 2;
        const panePos = this._getMapPanePos();
        const offsetX = panePos.x % cellSize;
        const offsetY = panePos.y % cellSize;
        const maxZoom = this._map.getMaxZoom();
        const v = 1 / Math.pow(2, Math.max(0, Math.min(maxZoom - this._map.getZoom(), 12)));
        const grid: any[] = [];
        let cell: any;
        if (this._map.getBounds().contains(coordinate)) {
            const x = Math.floor((point.x - offsetX) / cellSize) + 2;
            const y = Math.floor((point.y - offsetY) / cellSize) + 2;
            const k = this._radius * v;
            grid[y] = grid[y] || [];
            cell = grid[y][x];
            if (!cell) {
                grid[y][x] = [point.x, point.y, k];
            }
        }

        for (let i = 0, len = grid.length; i < len; i++) {
            if (grid[i]) {
                for (let j = 0, len2 = grid[i].length; j < len2; j++) {
                    cell = grid[i][j];
                    if (cell) {
                        return Math.min(cell[2], max);
                    }
                }
            }
        }

        return value;
    }

    clearData(): LMHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.clearData}`);
        this._data = [];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    addPoint(point: LMHeatmapPoint): LMHeatmapData {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.addPoint}`, {newPoint: point});
        this._data.push(point);
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    setMax(max: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.setMax}`, max);
        this._max = max;
        return this._max;
    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: LMHeatmapData}): boolean {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.draw}`, options);
        if (!this._map) { return false; }

        this._data = typeof options.data !== 'undefined' ? options.data : this._data;

        const data  = this._processData();

        this._opacity = typeof options.opacity !== "undefined" ? options.opacity : this._opacity;
        const result = Utils.createCircle(typeof options.radius !== "undefined" ? options.radius : this._radius);
        this._circle = result.circle as HTMLCanvasElement;
        this._r = result.radius;

        this._gradArray = typeof options.gradient !== "undefined" ? Utils.gradientArray(options.gradient) : Utils.gradientArray(this._gradient);

        const ctx = this._ctx;
        ctx.clearRect(0, 0, this._width, this._height);

        // Draw a grayscale heatmap by putting a blurred circle at each data point.
        data.forEach((point: HeatmapPoint) => {
            const thickness = Array.isArray(point) ? point[2] : point.thickness;
            const x = Array.isArray(point) ? point[0] : point.x;
            const y = Array.isArray(point) ? point[1] : point.y;
            ctx.globalAlpha = Math.min(Math.max(thickness / this._max, this._opacity), 1);
            ctx.drawImage(this._circle, x - this._r, y - this._r);
        });

        // Colorize the heatmap, using opacity value of each pixel to get the right color from our gradient.
        const colored = ctx.getImageData(0, 0, this._width, this._height);
        this._heatmapLogger.log("colored", {colored: colored});
        Utils.colorize(colored.data, this._gradArray);
        ctx.putImageData(colored, 0, 0);

        return true;
    }


    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options: {width: number, height: number}): {newWidth: number, newHeight: number} {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.resize}`, options);
        if ((this._canvas !== null) && (typeof this._canvas !== "undefined")) {
            this._clearCanvas();
            this._canvas.width = options.width;
            this._canvas.height = options.height;
            this._width = this._canvas.width;
            this._height = this._canvas.height;
            const opt = {};
            this.draw(opt);
            const mapDiv: HTMLElement = document.getElementById(this._map.getContainer().id) as HTMLElement;
            mapDiv.style.width = options.width + 'px';
            mapDiv.style.height = options.height + 'px';

            return {newWidth: this._canvas.width, newHeight: this._canvas.height};
        }
        return {newWidth: 0, newHeight: 0};
    }

    gradient(grad: GMHeatmapGradient): HeatmapGradient {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.gradient}`, grad);
        this._gradient = grad;
        const opt = {gradient: grad};
        this.draw(opt);
        return this._gradient;
    }

    opacity(opa: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.opacity}`, opa);
        if (opa >= 0 && opa <= 1) {
            this._opacity = opa;
            const opt = {opacity: opa};
            this.draw(opt);
            return this._opacity;
        }
        else {
            this._heatmapLogger.error(`${Logs.heatmaps.leaflet} ${Logs.methods.opacity}  ERROR -> ${Logs.errors.invalidOpacity}`);
            return -1;
        }
    }

    radius(rad: number): number {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.radius}`, rad);
        this._radius = rad;
        const opt = {radius: rad};
        this.draw(opt);
        return this._radius;
    }


    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    async getDataURL(type: string, imageQuality: number): Promise<string> {
        this._heatmapLogger.log(`${Logs.heatmaps.leaflet} ${Logs.methods.getDataUrl}`, type, imageQuality);
        try {
            const canvas = await html2canvas(this._map.getContainer(), {
                useCORS: true
            });
            return canvas.toDataURL(type, imageQuality);
        } catch (error: unknown) {
            return (error as Error).message.toString();
        }
    }

    /*********/
    // Private methods.
    /*********/

    private _addHeatmapLayer2Map() {

        this._canvas = DomUtil.create('canvas', 'leaflet-heatmap-layer leaflet-layer') as HTMLCanvasElement;

        const originProp = DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
        this._canvas.setAttribute("style", `${originProp}:red`);


        const size = this._map.getSize();
        this._canvas.width  = size.x;
        this._canvas.height = size.y;

        const animated = this._map.options.zoomAnimation && Browser.any3d;
        DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));

        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        DomUtil.setPosition(this._canvas, topLeft);

        this._map.getPanes().overlayPane.appendChild(this._canvas);
        // map.getPane('labels').style.pointerEvents = 'none';

    }

    private _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    private _animateZoom(e: any) {
        console.log(e);

        /*
        const newZoom = e.zoom;
        const currentZoom = this._map.getZoom();
        const zoomScale = this._map.getZoomScale(newZoom, currentZoom);
        const offset = this._getCenterOffset(e.center).multiplyBy(-zoomScale).subtract(this._getMapPanePos());

        if (DomUtil.setTransform) {
            DomUtil.setTransform(this._canvas, offset, zoomScale);
        } else {
            this._canvas.style[DomUtil.TRANSFORM] = DomUtil.getTranslateString(offset) + ' scale(' + scale + ')';
        }
        */
    }


    _getCenterOffset(latlng: any): Point {
		return this._map.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    }

    private _getCenterLayerPoint(): Point {
		return this._map.containerPointToLayerPoint(this._map.getSize().divideBy(2));
    }

    private _getMapPanePos(): Point {
		return DomUtil.getPosition(this._map.getPanes().overlayPane) || new Point(0, 0);
    };

    private _reset(): void {

        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        DomUtil.setPosition(this._canvas, topLeft);

        const size = this._map.getSize();

        if (this._canvas.width !== size.x) {
            this._canvas.width = size.x;
        }
        if (this._canvas.height !== size.y) {
            this._canvas.height = size.y;
        }

        //this._redraw();

        const opt = {};
        this.draw(opt);

    }

    private _processData(): number[][] {

        const data: number[][] = [];
        // const size: Point = this._map.getSize();
        // const bounds = new Bounds(point([-this._r, -this._r]), size.add([this._r, this._r]));
        const max = this._max === undefined ? 1 : this._max;
        const cellSize = this._r / 2;
        const panePos = this._getMapPanePos(); // this._map.getPanes().overlayPane.getBoundingClientRect();
        const offsetX = panePos.x % cellSize;
        const offsetY = panePos.y % cellSize;
        const maxZoom = this._map.getMaxZoom();
        const v = 1 / Math.pow(2, Math.max(0, Math.min(maxZoom - this._map.getZoom(), 12)));
        const grid: any[] = [];
        let cell: any;

        this._data.forEach((coordinate: LatLngExpression/*LMHeatmapCoordinate*/) => {
            const point: Point = this._map.latLngToContainerPoint(coordinate);
            if (this._map.getBounds().contains(coordinate)) {
                const x = Math.floor((point.x - offsetX) / cellSize) + 2;
                const y = Math.floor((point.y - offsetY) / cellSize) + 2;
                const k = this._radius * v;
                grid[y] = grid[y] || [];
                cell = grid[y][x];
                if (!cell) {
                    grid[y][x] = [point.x, point.y, k];
                } else {
                    cell[0] = (cell[0] * cell[2] + point.x * k) / (cell[2] + k); // x
                    cell[1] = (cell[1] * cell[2] + point.y * k) / (cell[2] + k); // y
                    cell[2] += k; // Accumulated intensity value.
                }
            }

        })

        for (let i = 0, len = grid.length; i < len; i++) {
            if (grid[i]) {
                for (let j = 0, len2 = grid[i].length; j < len2; j++) {
                    cell = grid[i][j];
                    if (cell) {
                        data.push([
                            Math.round(cell[0]),
                            Math.round(cell[1]),
                            Math.min(cell[2], max)
                        ]);
                    }
                }
            }
        }

        return data;
    }

}