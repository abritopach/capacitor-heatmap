import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeatmapOverIframePage } from './heatmap-over-iframe.page';

const routes: Routes = [
  {
    path: '',
    component: HeatmapOverIframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeatmapOverIframePageRoutingModule {}
