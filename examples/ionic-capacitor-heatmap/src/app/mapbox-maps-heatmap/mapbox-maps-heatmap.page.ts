import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapbox-maps-heatmap',
  templateUrl: './mapbox-maps-heatmap.page.html',
  styleUrls: ['./mapbox-maps-heatmap.page.scss'],
})
export class MapboxMapsHeatmapPage implements OnInit {

  currentYear = new Date().getFullYear();

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;

  constructor() {
    this.mapbox.accessToken = environment.MAP_BOX_API_TOKEN;
  }

  ngOnInit() {
    setTimeout(() => this.buildMap(), 1000);
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapBox',
      style: `mapbox://styles/mapbox/streets-v11`,
      zoom: 15,
      center: [-3.703790, 40.416775]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
