import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { GoogleMapsHeatmapPageRoutingModule } from './google-maps-heatmap-routing.module';

import { GoogleMapsHeatmapPage } from './google-maps-heatmap.page';

@NgModule({
  imports: [
    SharedModule,
    GoogleMapsHeatmapPageRoutingModule
  ],
  declarations: [GoogleMapsHeatmapPage]
})
export class GoogleMapsHeatmapPageModule {}
