import { Component, OnInit } from '@angular/core';
import { Heatmap } from 'capacitor-heatmap';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { IHeatmapOptions, IHeatmapType } from 'capacitor-heatmap/dist/esm/models/models';

@Component({
  selector: 'app-heatmap-over-iframe',
  templateUrl: './heatmap-over-iframe.page.html',
  styleUrls: ['./heatmap-over-iframe.page.scss'],
})
export class HeatmapOverIframePage implements OnInit {

  currentYear = new Date().getFullYear();

  urlIframe = 'https://www.marca.com';

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    this.initializeHeatmapOverIframe();
  }

  async ionViewWillEnter() {
    console.log('HeatmapOverIframePage::ionViewWillEnter() | method called');
  }

  async ionViewWillLeave(){
    console.log('HeatmapOverIframePage::ionViewWillLeave() | method called');
  }

  async initializeHeatmapOverIframe() {

    const options: IHeatmapOptions = {element: 'testHeatmapIframe', type: IHeatmapType.Simple, debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    const canvas: HTMLCanvasElement = result.value as HTMLCanvasElement;
    canvas.style.pointerEvents = 'none';

    Heatmap.setMax(18);

    const d = await Heatmap.setData(this.fakeHeatmapDataService.getData());
    console.log('d', d);
    console.time('draw');
    this.drawHeatmap();
    console.timeEnd('draw');
  }

  async drawHeatmap() {
    const options = {opacity: 0.05};
    const result = await Heatmap.draw(options);
  }

}
