import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeatmapOverImgPageRoutingModule } from './heatmap-over-img-routing.module';

import { HeatmapOverImgPage } from './heatmap-over-img.page';

@NgModule({
  imports: [
    SharedModule,
    HeatmapOverImgPageRoutingModule
  ],
  declarations: [HeatmapOverImgPage]
})
export class HeatmapOverImgPageModule {}
