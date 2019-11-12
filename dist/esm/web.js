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
            this._canvas = typeof options.canvas === 'string' ? document.getElementById(options.canvas) : options.canvas;
            this._ctx = this._canvas.getContext('2d');
            this._width = this._canvas.width;
            this._height = this._canvas.height;
            this._max = 1;
            this._data = [];
            return this._canvas;
        });
    }
}
const Heatmap = new HeatmapWeb();
export { Heatmap };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
//# sourceMappingURL=web.js.map