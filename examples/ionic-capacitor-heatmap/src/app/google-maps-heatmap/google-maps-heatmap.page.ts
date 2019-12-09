import { Component, OnInit } from '@angular/core';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { Heatmap } from 'capacitor-heatmap';
import { IGMHeatmapOptions, IHeatmapType } from 'capacitor-heatmap/dist/esm/models/models';

@Component({
  selector: 'app-google-maps-heatmap',
  templateUrl: './google-maps-heatmap.page.html',
  styleUrls: ['./google-maps-heatmap.page.scss'],
})
export class GoogleMapsHeatmapPage implements OnInit {

  map: google.maps.Map;

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    /*
    google.maps.event.addDomListener(window, 'load', () => {
      this.initMap();
      this.initializeGMHeatmap();
    });
    */
  }

  ionViewWillEnter() {
    console.log('GoogleMapsHeatmapPage::ionViewWillEnter() | method called');
    this.initMap();
    this.initializeGMHeatmap();
  }

  initMap() {
    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 13,
      mapTypeId: 'satellite'
    });
  }

  async initializeGMHeatmap() {

    const options: IGMHeatmapOptions = {type: IHeatmapType.GoogleMaps, map: this.map,
      data: this.fakeHeatmapDataService.getGoogleMapsData(), debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result initialize', result);
    this.drawHeatmap();

  }

  async drawHeatmap() {
    const options = {data: this.fakeHeatmapDataService.getGoogleMapsData()};
    const result = await Heatmap.draw(options);
    console.log('result draw', result);
  }

  onClickClearData() {
    Heatmap.clearData();
  }

  onClickChangeGradient() {
    const gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ];
    Heatmap.gradient(gradient);
  }

}
