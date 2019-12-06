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
import { IHeatmapType } from './models/models';
import { SimpleHeatmap } from './heatmaps/simple-heatmap';
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
    getCanvas() {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.getCanvas() };
        });
    }
    initialize(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = typeof options.type !== "undefined" ? options.type : IHeatmapType.Simple;
            switch (type) {
                case IHeatmapType.Simple: {
                    this.heatmap = new SimpleHeatmap();
                    break;
                }
                case IHeatmapType.GoogleMaps: {
                    break;
                }
                case IHeatmapType.LeafletMaps: {
                    break;
                }
                default: {
                    this.heatmap = new SimpleHeatmap();
                    break;
                }
            }
            return { value: this.heatmap.initialize(options) };
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.destroy() };
        });
    }
    /*********/
    // Methods for handling heatmap data.
    /*********/
    setData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.setData(data) };
        });
    }
    clearData() {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.clearData() };
        });
    }
    addPoint(point) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.addPoint(point) };
        });
    }
    setMax(max) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.setMax(max) };
        });
    }
    /*********/
    // Methods for rendering heatmap.
    /*********/
    draw(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.draw(options) };
        });
    }
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    resize(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.resize(options) };
        });
    }
    gradient(grad) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.gradient(grad) };
        });
    }
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    getDataURL(type, imageQuality) {
        return __awaiter(this, void 0, void 0, function* () {
            return { value: this.heatmap.getDataURL(type, imageQuality) };
        });
    }
}
const Heatmap = new HeatmapWeb();
export { Heatmap };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Heatmap);
//# sourceMappingURL=web.js.map