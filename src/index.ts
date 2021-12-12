import { registerPlugin } from '@capacitor/core';

import type { HeatmapPlugin } from './definitions';

const Heatmap = registerPlugin<HeatmapPlugin>('Heatmap', {
    web: () => import('./web').then(m => new m.HeatmapWeb()),
});

export * from './definitions';
export { Heatmap };
