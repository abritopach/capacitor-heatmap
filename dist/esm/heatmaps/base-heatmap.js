import { IHeatmapType } from '../models/models';
export class BaseHeatmap {
}
BaseHeatmap.DEFAULT_GRADIENT = {
    0.4: 'blue',
    0.6: 'cyan',
    0.7: 'lime',
    0.8: 'yellow',
    1.0: 'red'
};
BaseHeatmap.DEFAULT_RADIUS = 25;
BaseHeatmap.DEFAULT_TYPE = IHeatmapType.Simple;
//# sourceMappingURL=base-heatmap.js.map