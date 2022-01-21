import { Component, HostListener, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Heatmap } from '../../../../../dist/esm';
import { HeatmapGradient, HeatmapType, MapboxHeatmapOptions } from '../../../../../dist/esm/models/models';
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

  changedGradient = false;
  changedOpacity = false;
  changedRadius = false;

  DEFAULT_GRADIENT: HeatmapGradient = {
    0: 'rgba(33,102,172,0)',
    0.2: 'rgb(0, 0, 255)',
    0.4: 'rgb(0,255,255)',
    0.6: 'rgb(0, 255, 0)',
    0.8: 'rgb(255,255,0)',
    1: 'rgb(255,0,0)'
  };
  gradient = this.DEFAULT_GRADIENT;
  opacity = 0.05;
  radius = 20;

  destroy = false;

  @HostListener('window:resize', ['$event']) async onResize(event) {
    this.resizeHeatmap(event.target.innerWidth, event.target.innerHeight);
  }

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
    this.map.on('zoom', () => {
      console.log('Mapbox zoom', this.map.getZoom());
    });
    this.initializeMapboxHeatmap();
  }

  async initializeMapboxHeatmap() {

      // Initialize.
      const options: MapboxHeatmapOptions = {type: HeatmapType.MapboxMaps, map: this.map, debug: true};
      const result = await Heatmap.initialize(options);
      console.log('result initialize', result);

      const data = this.fakeHeatmapDataService.getMapboxMapsData();
      console.log('data', data);

      // Set data.
      const resultSetData = await Heatmap.setData(data);
      console.log('result set data', resultSetData);

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

    const data = this.fakeHeatmapDataService.getMapboxMapsData();
    console.log('data', data);

    const resultAddData = await Heatmap.setData(data);
    console.log('result add data', resultAddData);
  }

  onClickGetValueAt() {
    this.getValueAt();
  }

  async getValueAt() {
    const coordinate = [-87.6901, 12.0623];
    const resultValueAt = await Heatmap.getValueAt(coordinate);
    console.log('resultValueAt', resultValueAt);
  }

  onClickChangeGradient() {
    this.changeGradient();
  }

  async changeGradient() {
    const gradient: HeatmapGradient = {
      0: 'rgba(33,102,172,0)',
      0.2: 'rgb(103,169,207)',
      0.4: 'rgb(209,229,240)',
      0.6: 'rgb(253,219,199)',
      0.8: 'rgb(239,138,98)',
      1: 'rgb(178,24,43)'
    };
    this.changedGradient = !this.changedGradient;
    this.gradient = this.changedGradient ? gradient : this.DEFAULT_GRADIENT;
    const resultChangeGradient = await Heatmap.gradient(this.gradient);
    console.log('resultChangeGradient', resultChangeGradient);
  }

  onClickChangeOpacity() {
    this.changeOpacity();
  }

  async changeOpacity() {
    this.changedOpacity = !this.changedOpacity;
    this.opacity = this.changedOpacity ? 0.5 : 1;
    const resultChangeOpacity = await Heatmap.opacity(this.opacity);
    console.log('resultChangeOpacity', resultChangeOpacity);
  }

  onClickChangeRadius() {
    this.changeRadius();
  }

  async changeRadius() {
    this.changedRadius = !this.changedRadius;
    this.radius = this.changedRadius ? 30 : 20;
    const resultChangeRadius = await Heatmap.radius(this.radius);
    console.log('resultChangeRadius', resultChangeRadius);
  }

  onClickResize() {
    this.resizeHeatmap(500, 300);
  }

  async resizeHeatmap(width: number, height: number) {
    const options = {width, height};
    const resultResize = await Heatmap.resize(options);
    console.log('resultResize', resultResize);
  }

  onClickDestroy() {
    this.destroy = !this.destroy;
    this.destroyHeatmap();
  }

  async destroyHeatmap() {
    const resultDestroy = await Heatmap.destroy();
    console.log('resultDestroy', resultDestroy);
  }

}
