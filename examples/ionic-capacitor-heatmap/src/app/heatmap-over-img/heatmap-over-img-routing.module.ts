import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeatmapOverImgPage } from './heatmap-over-img.page';

const routes: Routes = [
  {
    path: '',
    component: HeatmapOverImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeatmapOverImgPageRoutingModule {}
