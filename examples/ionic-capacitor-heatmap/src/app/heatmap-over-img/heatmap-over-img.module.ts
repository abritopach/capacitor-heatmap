import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeatmapOverImgPageRoutingModule } from './heatmap-over-img-routing.module';

import { HeatmapOverImgPage } from './heatmap-over-img.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeatmapOverImgPageRoutingModule
  ],
  declarations: [HeatmapOverImgPage]
})
export class HeatmapOverImgPageModule {}
