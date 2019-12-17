import { Component, OnInit } from '@angular/core';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { Heatmap } from 'capacitor-heatmap';
import { IGMHeatmapOptions, IHeatmapType, GMHeatmapPoint } from 'capacitor-heatmap/dist/esm/models/models';

@Component({
  selector: 'app-google-maps-heatmap',
  templateUrl: './google-maps-heatmap.page.html',
  styleUrls: ['./google-maps-heatmap.page.scss'],
})
export class GoogleMapsHeatmapPage implements OnInit {

  map: google.maps.Map;
  changedGradient = false;
  changedOpacity = false;
  changedRadius = false;

  DEFAULT_GRADIENT = [
    "rgba(102, 255, 0, 0)",
    "rgba(102, 255, 0, 1)",
    "rgba(147, 255, 0, 1)",
    "rgba(193, 255, 0, 1)",
    "rgba(238, 255, 0, 1)",
    "rgba(244, 227, 0, 1)",
    "rgba(249, 198, 0, 1)",
    "rgba(255, 170, 0, 1)",
    "rgba(255, 113, 0, 1)",
    "rgba(255, 57, 0, 1)",
    "rgba(255, 0, 0, 1)"
  ];

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    /*
    google.maps.event.addDomListener(window, 'load', () => {
      this.initializeGMHeatmap();
    });
    */
  }

  ionViewWillEnter() {
    console.log('GoogleMapsHeatmapPage::ionViewWillEnter() | method called');
    this.initializeGMHeatmap();
  }

  async initializeGMHeatmap() {

    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 13,
      mapTypeId: 'satellite'
    });

    const options: IGMHeatmapOptions = {type: IHeatmapType.GoogleMaps, map: this.map,
      data: this.fakeHeatmapDataService.getGoogleMapsData(), debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result initialize', result);
    this.drawHeatmap();

  }

  async drawHeatmap() {
    const options = {data: this.fakeHeatmapDataService.getGoogleMapsData(), opacity: 0.5, radius: 10};
    const result = await Heatmap.draw(options);
    console.log('result draw', result);
  }

  onClickClearData() {
    Heatmap.clearData();
  }

  onClickAddData() {
    // Heatmap.setData(this.fakeHeatmapDataService.getGoogleMapsData2());
    Heatmap.setData(this.fakeHeatmapDataService.getGoogleMapsData3());
  }

  onClickAddPoint() {
    const point: google.maps.LatLng = new google.maps.LatLng(37.782551, -122.445368);
    Heatmap.addPoint(point);
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
    this.changedGradient = !this.changedGradient;
    Heatmap.gradient(this.changedGradient ? gradient : this.DEFAULT_GRADIENT);
  }

  onClickChangeOpacity() {
    this.changedOpacity = !this.changedOpacity;
    Heatmap.opacity(this.changedOpacity ? 1 : 0.5);
  }

  onClickChangeRadius() {
    this.changedRadius = !this.changedRadius;
    Heatmap.radius(this.changedRadius ? 30 : 10);
  }

}
