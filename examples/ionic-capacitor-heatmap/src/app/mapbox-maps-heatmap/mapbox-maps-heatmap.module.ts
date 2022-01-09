import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MapboxMapsHeatmapPageRoutingModule } from './mapbox-maps-heatmap-routing.module';

import { MapboxMapsHeatmapPage } from './mapbox-maps-heatmap.page';

@NgModule({
  imports: [
    SharedModule,
    MapboxMapsHeatmapPageRoutingModule
  ],
  declarations: [MapboxMapsHeatmapPage]
})
export class MapboxMapsHeatmapPageModule {}
