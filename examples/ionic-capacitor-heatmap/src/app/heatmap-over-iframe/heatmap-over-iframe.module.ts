import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeatmapOverIframePageRoutingModule } from './heatmap-over-iframe-routing.module';

import { HeatmapOverIframePage } from './heatmap-over-iframe.page';

import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  imports: [
    SharedModule,
    HeatmapOverIframePageRoutingModule
  ],
  declarations: [HeatmapOverIframePage, SafePipe]
})
export class HeatmapOverIframePageModule {}
