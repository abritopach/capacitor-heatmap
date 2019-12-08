import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps-heatmap',
  templateUrl: './google-maps-heatmap.page.html',
  styleUrls: ['./google-maps-heatmap.page.scss'],
})
export class GoogleMapsHeatmapPage implements OnInit {

  constructor() { }

  ngOnInit() {

    google.maps.event.addDomListener(window, 'load', this.initMap);
  }

  initMap() {
    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

    const map = new google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 13,
      mapTypeId: 'satellite'
    });
  }

}
