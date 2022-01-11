import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Heatmap } from '../../../../../dist/esm';
import { HeatmapType, MapboxHeatmapOptions } from '../../../../../dist/esm/models/models';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';

@Component({
  selector: 'app-mapbox-maps-heatmap',
  templateUrl: './mapbox-maps-heatmap.page.html',
  styleUrls: ['./mapbox-maps-heatmap.page.scss'],
})
export class MapboxMapsHeatmapPage implements OnInit {

  currentYear = new Date().getFullYear();

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;

  constructor(private fakeHeatmapDataService: FakeHeatmapDataService) {
    this.mapbox.accessToken = environment.MAP_BOX_API_TOKEN;
  }

  ngOnInit() {
    setTimeout(() => this.buildMap(), 1000);
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapBox',
      style: `mapbox://styles/mapbox/streets-v11`,
      // zoom: 15,
      // center: [-3.703790, 40.416775]
      center: [-120, 50],
      zoom: 2
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.initializeMapboxHeatmap();
  }

  async initializeMapboxHeatmap() {

      // Initialize.
      const options: MapboxHeatmapOptions = {type: HeatmapType.MapboxMaps, map: this.map, debug: true};
      const result = await Heatmap.initialize(options);
      console.log('result initialize', result);

      const data = this.fakeHeatmapDataService.getMapboxMapsData();

  }

}
