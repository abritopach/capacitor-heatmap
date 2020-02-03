import { BaseHeatmap } from './base-heatmap';
import { Log } from "../log";
import { GMHeatmapGradient, ILMHeatmapOptions, LMHeatmapData, HeatmapPoint,
         HeatmapGradient, LMHeatmapPoint, LMHeatmapCoordinate} from '../models/models';

import { Map, DomUtil, Browser, LatLngTuple, Point, bounds } from 'leaflet';

import { Utils }  from "../utils/utils";

export class LeafletMapsHeatmap extends BaseHeatmap {

    _map: Map;
    _canvas: HTMLCanvasElement;
    _data: LMHeatmapData;

    static readonly DEFAULT_GRADIENT: HeatmapGradient = {
        0.4: 'blue',
        0.6: 'cyan',
        0.7: 'lime',
        0.8: 'yellow',
        1.0: 'red'
    };
    static readonly DEFAULT_RADIUS = 20;
    static readonly DEFAULT_OPACITY = 0.05;

    _circle: HTMLCanvasElement;
    _gradArray: Uint8ClampedArray;
    _r: number;
    _opacity: number;
    _gradient: HeatmapGradient;
    _radius: number;
    _max: number;
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;

    initialize(options: ILMHeatmapOptions): HTMLCanvasElement {
        this._heatmapLogger = new Log(options.debug);
        this._heatmapLogger.log("__LeafletMapsHeatmap__ initialize");
        this._map = options.map;
        console.log('map', this._map);

        this._data = typeof options.data !== 'undefined' ? options.data : [];
        (
            this._heatmapLogger.warn("__LeafletMapsHeatmap__ Data is undefined or empty. Passes heatmap data into draw function or set heatmap data with setData function."),
            []
        );

        this._addHeatmapLayer2Map();

        this._ctx = this._canvas.getContext('2d');
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._max = 18;
        this._opacity = LeafletMapsHeatmap.DEFAULT_OPACITY;
        this._radius = LeafletMapsHeatmap.DEFAULT_RADIUS;
        const result = Utils.createCircle(this._radius);
        this._circle = result.circle;
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
        this._heatmapLogger.log("__LeafletMapsHeatmap__ destroy");
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
        this._heatmapLogger.log("__LeafletMapsHeatmap__ setData", data);
        this._data = [];
        this._data = [...data];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    getData(): LMHeatmapData {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ getData");
        return this._data;
    }

    getValueAt(coordinate: LMHeatmapCoordinate): void {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ getValueAt", coordinate);
    }

    clearData(): LMHeatmapData {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ clearData");
        this._data = [];
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    addPoint(point: LMHeatmapPoint): LMHeatmapData {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ addPoint", {newPoint: point});
        this._data.push(point);
        const opt = {};
        this.draw(opt);
        return this._data;
    }

    setMax(max: number): number {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ max", max);
        this._max = max;
        return this._max;
    }


    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options: {opacity?: number, radius?: number, gradient?: string[], data?: LMHeatmapData}): boolean {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ draw", options);
        if (!this._map) { return false; }

        this._data = typeof options.data !== 'undefined' ? options.data : this._data;

        const data  = this._redraw();

        this._opacity = typeof options.opacity !== "undefined" ? options.opacity : this._opacity;
        const result = Utils.createCircle(typeof options.radius !== "undefined" ? options.radius : this._radius);
        this._circle = result.circle;
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
        this._heatmapLogger.log("__LeafletMapsHeatmap__ resize", options);
        if ((this._canvas !== null) && (typeof this._canvas !== "undefined")) {
            this._clearCanvas();
            this._canvas.width = options.width;
            this._canvas.height = options.height;
            this._width = this._canvas.width;
            this._height = this._canvas.height;
            const opt = {};
            this.draw(opt);
            const mapDiv: HTMLElement = document.getElementById(this._map.getContainer().id);
            mapDiv.style.width = options.width + 'px';
            mapDiv.style.height = options.height + 'px';

            return {newWidth: this._canvas.width, newHeight: this._canvas.height};
        }
        return {newWidth: 0, newHeight: 0};
    }

    gradient(grad: GMHeatmapGradient): HeatmapGradient {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ gradient", grad);
        this._gradient = grad;
        const opt = {gradient: grad};
        this.draw(opt);
        return this._gradient;
    }

    opacity(opa: number): number {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ opacity", opa);
        this._opacity = opa;
        const opt = {opacity: opa};
        this.draw(opt);
        return this._opacity;
    }

    radius(rad: number): number {
        this._heatmapLogger.log("__LeafletMapsHeatmap__ radius", rad);
        this._radius = rad;
        const opt = {radius: rad};
        this.draw(opt);
        return this._radius;
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

    private _addHeatmapLayer2Map() {

        this._canvas = DomUtil.create('canvas', 'leaflet-heatmap-layer leaflet-layer') as HTMLCanvasElement;

        // const originProp = DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
        this._canvas.style.transformOrigin = '50% 50%';

        const size = this._map.getSize();
        this._canvas.width  = size.x;
        this._canvas.height = size.y;

        /*
        const ctx = this._canvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        */

        const animated = this._map.options.zoomAnimation && Browser.any3d;
        DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));

        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        DomUtil.setPosition(this._canvas, topLeft);

        this._map.getPanes().overlayPane.appendChild(this._canvas);
        // map.getPane('labels').style.pointerEvents = 'none';

        /*
        this._map.eachLayer((layer: Layer) => {
            console.log('layerrrrrr', layer);
        });
        */
    }

    private _clearCanvas() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    private _animateZoom(e: any) {

        const newZoom = e.zoom;

        const currentZoom = this._map.getZoom();

        const zoomScale = this._map.getZoomScale(newZoom, currentZoom);

        // const offset = this._map.latLngToLayerPoint(this._map.getCenter()).multiplyBy(-zoomScale);
        // .subtract(this._map.getPane().);

        // const topLeft = this._map.getPixelOrigin();
        // const offset = this._map.project(this._map.getCenter(), this._map.getZoom()).subtract(topLeft);

        // const offset = this._map.latLngToLayerPoint(this._map.getBounds().getNorthWest());

        const offset = this._getCenterOffset(e.center).multiplyBy(-zoomScale).subtract(this._getMapPanePos());

        // const offset = this._latLngBoundsToNewLayerBounds(this._map.getBounds(), e.zoom, e.center).min;

        if (DomUtil.setTransform) {
            DomUtil.setTransform(this._canvas, offset, zoomScale);
        } else {
        }

        /*
        var scale = this._map.getZoomScale(e.zoom),
            offset = this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());

        if (DomUtil.setTransform) {
            DomUtil.setTransform(this._canvas, offset, scale);
        } else {
            this._canvas.style[DomUtil.TRANSFORM] = DomUtil.getTranslateString(offset) + ' scale(' + scale + ')';
        }
        */

    }

    _getCenterOffset(latlng: any) {
		return this._map.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    }

    _getCenterLayerPoint() {
		return this._map.containerPointToLayerPoint(this._map.getSize().divideBy(2));
    }

    _getMapPanePos() {
		return DomUtil.getPosition(this._map.getPanes().overlayPane) || new Point(0, 0);
    };

    _getNewPixelOrigin(center: any, zoom: any) {
		var viewHalf = this._map.getSize().divideBy(2);
		return this._map.project(center, zoom).subtract(viewHalf).add(this._getMapPanePos()).round();
	};

    _latLngBoundsToNewLayerBounds(latLngBounds: any, zoom: any, center: any) {
		const topLeft = this._getNewPixelOrigin(center, zoom);
		return bounds([
			this._map.project(latLngBounds.getSouthWest(), zoom).subtract(topLeft),
			this._map.project(latLngBounds.getNorthWest(), zoom).subtract(topLeft),
			this._map.project(latLngBounds.getSouthEast(), zoom).subtract(topLeft),
			this._map.project(latLngBounds.getNorthEast(), zoom).subtract(topLeft)
		]);
    };

    _reset() {

        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        DomUtil.setPosition(this._canvas, topLeft);

        var size = this._map.getSize();

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

    _redraw() {

        let data: Array<Array<number>> = [];
        // const size: Point = this._map.getSize();
        // const bounds = new Bounds(point([-this._r, -this._r]), size.add([this._r, this._r]));
        const max = this._max === undefined ? 1 : this._max;
        const cellSize = this._r / 2;
        const panePos = this._getMapPanePos(); // this._map.getPanes().overlayPane.getBoundingClientRect();
        const offsetX = panePos.x % cellSize;
        const offsetY = panePos.y % cellSize;
        const maxZoom = this._map.getMaxZoom();
        const v = 1 / Math.pow(2, Math.max(0, Math.min(maxZoom - this._map.getZoom(), 12)));
        let grid: any[] = [];
        let cell: any;

        this._data.forEach((coordinate: LatLngTuple) => {
            const point: Point = this._map.latLngToContainerPoint(coordinate);

            // if (bounds.contains(point)) {
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
                    cell[2] += k; // Accumulated intensity value
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