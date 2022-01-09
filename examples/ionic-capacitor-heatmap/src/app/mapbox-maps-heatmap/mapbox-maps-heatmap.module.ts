import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapboxMapsHeatmapPageRoutingModule } from './mapbox-maps-heatmap-routing.module';

import { MapboxMapsHeatmapPage } from './mapbox-maps-heatmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapboxMapsHeatmapPageRoutingModule
  ],
  declarations: [MapboxMapsHeatmapPage]
})
export class MapboxMapsHeatmapPageModule {}
