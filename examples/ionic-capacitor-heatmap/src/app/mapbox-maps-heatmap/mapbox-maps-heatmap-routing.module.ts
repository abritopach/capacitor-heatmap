import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapboxMapsHeatmapPage } from './mapbox-maps-heatmap.page';

const routes: Routes = [
  {
    path: '',
    component: MapboxMapsHeatmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapboxMapsHeatmapPageRoutingModule {}
