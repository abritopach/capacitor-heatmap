import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletMapsHeatmapPage } from './leaflet-maps-heatmap.page';

const routes: Routes = [
  {
    path: '',
    component: LeafletMapsHeatmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeafletMapsHeatmapPageRoutingModule {}
