var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
import { Log } from './log';
export class HeatmapWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Heatmap',
            platforms: ['web']
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ECHO', options);
            return options;
        });
    }
    createHeatmap(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this._heatmapLogger = new Log(options.debug);
            this._heatmapLogger.log("createHeatmap");
            this._canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) : options.canvas;
            if ((this._canvas !== null) && (typeof this._canvas !== 'undefined')) {
                this._ctx = this._canvas.getContext('2d');
                this._width = this._canvas.width;
                this._height = this._canvas.height;
                this._max = 1;
                this._data = options.data;
            }
            return this._canvas;
        });
    }
    draw(minOpacity) {
        return __awaiter(this, void 0, void 0, function* () {
            this._heatmapLogger.log("draw");
            this._circle = this._createCanvas();
            const ctx = this._ctx;
            ctx.clearRect(0, 0, this._width, this._height);
            // Draw a grayscale heatmap by putting a blurred circle at each data point.
            this._data.map(point => {
                this._heatmapLogger.log("data", { point: point });
                ctx.globalAlpha = Math.min(Math.max(point[2] / this._max, minOpacity === undefined ? 0.05 : minOpacity), 1);
                ctx.drawImage(this._circle, point[0] - 25, point[1] - 25);
            });
        });
    }
    _createCanvas() {
        if (typeof document !== 'undefined') {
            return document.createElement('canvas');
        }
    }
}
const Heatmap = new HeatmapWeb();
export { Heatmap };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
//# sourceMappingURL=web.js.map