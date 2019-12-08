import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsHeatmapPage } from './google-maps-heatmap.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsHeatmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMapsHeatmapPageRoutingModule {}
