// Angular
import { Component, OnInit, HostListener } from '@angular/core';

// Third parties
import { Heatmap } from 'capacitor-heatmap';
import { GMHeatmapOptions, HeatmapType, GMHeatmapCoordinate } from 'capacitor-heatmap/dist/esm/models/models';

/* Project */

// Services
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-google-maps-heatmap',
  templateUrl: './google-maps-heatmap.page.html',
  styleUrls: ['./google-maps-heatmap.page.scss'],
})
export class GoogleMapsHeatmapPage implements OnInit {

  currentYear = new Date().getFullYear();
  map: google.maps.Map;
  changedGradient = false;
  changedOpacity = false;
  changedRadius = false;
  destroy = false;

  DEFAULT_GRADIENT = [
    'rgba(102, 255, 0, 0)',
    'rgba(102, 255, 0, 1)',
    'rgba(147, 255, 0, 1)',
    'rgba(193, 255, 0, 1)',
    'rgba(238, 255, 0, 1)',
    'rgba(244, 227, 0, 1)',
    'rgba(249, 198, 0, 1)',
    'rgba(255, 170, 0, 1)',
    'rgba(255, 113, 0, 1)',
    'rgba(255, 57, 0, 1)',
    'rgba(255, 0, 0, 1)'
  ];

  @HostListener('window:resize', ['$event']) async onResize(event) {
    this.resizeHeatmap(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService, private commonService: CommonService) { }

  ngOnInit() {
    console.log('GoogleMapsHeatmapPage::ngOnInit() | method called');
    this.initializeGMHeatmap();
  }

  ionViewWillEnter() {
    console.log('GoogleMapsHeatmapPage::ionViewWillEnter() | method called');
    this.destroy = false;
  }

  async initializeGMHeatmap() {

    const sanFrancisco = new google.maps.LatLng(37.774546, -122.433523);

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: sanFrancisco,
      zoom: 13,
      mapTypeId: 'satellite'
    });

    const options: GMHeatmapOptions = {type: HeatmapType.GoogleMaps, map: this.map,
      /*data: this.fakeHeatmapDataService.getGoogleMapsData(),*/ debug: true};
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
    this.clearData();
  }

  async clearData() {
    const resultClearData = await Heatmap.clearData();
    console.log('result clear data', resultClearData);
  }

  onClickAddData() {
    this.addData();
  }

  async addData() {
    const resultAddData = await Heatmap.setData(this.fakeHeatmapDataService.getGoogleMapsData3());
    console.log('result add data', resultAddData);
  }

  onClickAddPoint() {
    this.addPoint();
  }

  async addPoint() {
    const point: google.maps.LatLng = new google.maps.LatLng(37.782551, -122.445368);
    const resultAddPoint = Heatmap.addPoint(point);
    console.log('result add point', resultAddPoint);
  }

  onClickChangeGradient() {
    this.changeGradient();
  }

  async changeGradient() {
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
    const resultChangeGradient = await Heatmap.gradient(this.changedGradient ? gradient : this.DEFAULT_GRADIENT);
    console.log('resultChangeGradient', resultChangeGradient);
  }

  onClickChangeOpacity() {
    this.changeOpacity();
  }

  async changeOpacity() {
    this.changedOpacity = !this.changedOpacity;
    const resultChangeOpacity = await Heatmap.opacity(this.changedOpacity ? 1 : 0.5);
    console.log('resultChangeOpacity', resultChangeOpacity);
  }

  onClickChangeRadius() {
    this.changeRadius();
  }

  async changeRadius() {
    this.changedRadius = !this.changedRadius;
    const resultChangeRadius = await Heatmap.radius(this.changedRadius ? 30 : 10);
    console.log('resultChangeRadius', resultChangeRadius);
  }

  onClickGetValueAt() {
    this.getValueAt();
  }

  async getValueAt() {
    const coordinate: GMHeatmapCoordinate = new google.maps.LatLng(37.782551, -122.445368); // new google.maps.LatLng(37.782, -122.443)
    const resultValueAt = await Heatmap.getValueAt(coordinate);
    console.log('resultValueAt ', resultValueAt);
  }

  onClickResize() {
    this.resizeHeatmap(500, 300);
  }

  async resizeHeatmap(width: number, height: number) {
    const options = {width, height};
    const resultResize = await Heatmap.resize(options);
    console.log('result resize', resultResize);
  }

  onClickDestroy() {
    this.destroy = !this.destroy;
    this.destroyHeatmap();
  }

  async destroyHeatmap() {
    const resultDestroy = await Heatmap.destroy();
    console.log('resultDestroy', resultDestroy);
  }

  onClickGetImage() {
    this.getHeatmapImage();
  }

  async getHeatmapImage() {
    const resultGetImage = await Heatmap.getDataURL('image/png', 1);
    console.log('resultGetImage', resultGetImage);
    this.commonService.presentToastWithOptions(resultGetImage.value);
  }

}
