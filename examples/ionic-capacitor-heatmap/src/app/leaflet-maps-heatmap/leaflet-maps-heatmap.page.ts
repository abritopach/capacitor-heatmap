import { Component, OnInit } from '@angular/core';

import { Map, tileLayer } from 'leaflet';
import { Heatmap } from 'capacitor-heatmap';
import { ILMHeatmapOptions, IHeatmapType, IHeatmapDrawOptions } from 'capacitor-heatmap/dist/esm/models/models';

import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';

@Component({
  selector: 'app-leaflet-maps-heatmap',
  templateUrl: './leaflet-maps-heatmap.page.html',
  styleUrls: ['./leaflet-maps-heatmap.page.scss'],
})
export class LeafletMapsHeatmapPage implements OnInit {

  mapLeaflet: Map;

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    this.initializeLMHeatmap();
  }

  initializeLMHeatmap() {
    // In setView add latLng and zoom
    // this.mapLeaflet = new Map('mapLeaflet').setView([37.774546, -122.433523], 13);
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
      const resultDraw = await Heatmap.draw(options);
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

}
