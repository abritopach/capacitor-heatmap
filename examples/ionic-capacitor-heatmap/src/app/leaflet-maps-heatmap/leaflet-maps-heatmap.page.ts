import { Component, OnInit, HostListener } from '@angular/core';

import { Map, tileLayer } from 'leaflet';
import { Heatmap } from 'capacitor-heatmap';
import { ILMHeatmapOptions, IHeatmapType, IHeatmapDrawOptions, HeatmapGradient, LMHeatmapCoordinate } from 'capacitor-heatmap/dist/esm/models/models';

import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';

@Component({
  selector: 'app-leaflet-maps-heatmap',
  templateUrl: './leaflet-maps-heatmap.page.html',
  styleUrls: ['./leaflet-maps-heatmap.page.scss'],
})
export class LeafletMapsHeatmapPage implements OnInit {

  currentYear = new Date().getFullYear();

  mapLeaflet: Map;

  destroy = false;
  changedGradient = false;
  changedOpacity = false;
  changedRadius = false;

  DEFAULT_GRADIENT: HeatmapGradient = {
    0.4: 'blue',
    0.6: 'cyan',
    0.7: 'lime',
    0.8: 'yellow',
    1.0: 'red'
  };
  gradient = this.DEFAULT_GRADIENT;
  opacity = 0.05;
  radius = 20;

  @HostListener('window:resize', ['$event']) async onResize(event) {
    this.resizeHeatmap(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    this.initializeLMHeatmap();
  }

  initializeLMHeatmap() {
    // In setView add latLng and zoom
    this.mapLeaflet = new Map('mapLeaflet').setView([-37.87, 175.475], 12);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapLeaflet);

    setTimeout(async () => {
      this.mapLeaflet.invalidateSize();

      // Initialize.
      const options: ILMHeatmapOptions = {type: IHeatmapType.LeafletMaps, map: this.mapLeaflet, debug: true};
      const result = await Heatmap.initialize(options);
      console.log('result initialize', result);

      const data = this.fakeHeatmapDataService.getLeafletMapsData().map(p => [p[0], p[1]] ) as Array<Array<number>>;

      // Set data.
      const resultSetData = await Heatmap.setData(data);
      console.log('result set data', resultSetData);

      // Draw
      const drawOptions: IHeatmapDrawOptions = {};
      const resultDraw = await Heatmap.draw(drawOptions);
      console.log('result draw', resultDraw);
    }, 1000);

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

    this.mapLeaflet.setView([-37.82109, 175.2193], 16);
    const data = this.fakeHeatmapDataService.getLeafletMapsData2().map(p => [p[0], p[1]] ) as Array<Array<number>>;

    const resultAddData = await Heatmap.setData(data);
    console.log('result add data', resultAddData);
  }

  onClickAddPoint() {
    this.addPoint();
  }

  async addPoint() {
    const point = [-37.8839, 175.3745188667];
    const resultAddPoint = Heatmap.addPoint(point);
    console.log('result add point', resultAddPoint);
  }

  onClickChangeGradient() {
    this.changeGradient();
  }

  async changeGradient() {
    const gradient: HeatmapGradient = {
      1.0: 'blue',
      0.8: 'cyan',
      0.7: 'lime',
      0.6: 'yellow',
      0.4: 'red'
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
    this.opacity = this.changedOpacity ? 0.1 : 0.05;
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

  onClickGetValueAt() {
    this.getValueAt();
  }

  async getValueAt() {
    const coordinate : LMHeatmapCoordinate = [-37.8869090667, 175.3657417333];
    const resultValueAt = await Heatmap.getValueAt(coordinate);
    console.log('resultValueAt', resultValueAt);
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
