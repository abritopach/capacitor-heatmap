import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafletMapsHeatmapPageRoutingModule } from './leaflet-maps-heatmap-routing.module';

import { LeafletMapsHeatmapPage } from './leaflet-maps-heatmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletMapsHeatmapPageRoutingModule
  ],
  declarations: [LeafletMapsHeatmapPage]
})
export class LeafletMapsHeatmapPageModule {}
