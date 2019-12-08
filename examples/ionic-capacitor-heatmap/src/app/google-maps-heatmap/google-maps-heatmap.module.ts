import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleMapsHeatmapPageRoutingModule } from './google-maps-heatmap-routing.module';

import { GoogleMapsHeatmapPage } from './google-maps-heatmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsHeatmapPageRoutingModule
  ],
  declarations: [GoogleMapsHeatmapPage]
})
export class GoogleMapsHeatmapPageModule {}
