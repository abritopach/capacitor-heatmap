import { Component, OnInit } from '@angular/core';

import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-leaflet-maps-heatmap',
  templateUrl: './leaflet-maps-heatmap.page.html',
  styleUrls: ['./leaflet-maps-heatmap.page.scss'],
})
export class LeafletMapsHeatmapPage implements OnInit {

  mapLeaflet: Map;

  constructor() { }

  ngOnInit() {
    this.initializeLMHeatmap();
  }

  initializeLMHeatmap() {
    // In setView add latLng and zoom
    this.mapLeaflet = new Map('mapLeaflet').setView([37.774546, -122.433523], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapLeaflet);

    setTimeout(() => {
      this.mapLeaflet.invalidateSize();
  }, 1000);
  }

}
