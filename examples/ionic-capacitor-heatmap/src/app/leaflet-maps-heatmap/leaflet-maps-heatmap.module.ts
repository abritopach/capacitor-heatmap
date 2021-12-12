import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LeafletMapsHeatmapPageRoutingModule } from './leaflet-maps-heatmap-routing.module';

import { LeafletMapsHeatmapPage } from './leaflet-maps-heatmap.page';

@NgModule({
  imports: [
    SharedModule,
    LeafletMapsHeatmapPageRoutingModule
  ],
  declarations: [LeafletMapsHeatmapPage]
})
export class LeafletMapsHeatmapPageModule {}
