import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeatmapOverIframePageRoutingModule } from './heatmap-over-iframe-routing.module';

import { HeatmapOverIframePage } from './heatmap-over-iframe.page';

import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeatmapOverIframePageRoutingModule
  ],
  declarations: [HeatmapOverIframePage, SafePipe]
})
export class HeatmapOverIframePageModule {}
