import { Component, OnInit } from '@angular/core';
import { Heatmap } from 'capacitor-heatmap';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';

@Component({
  selector: 'app-heatmap-over-iframe',
  templateUrl: './heatmap-over-iframe.page.html',
  styleUrls: ['./heatmap-over-iframe.page.scss'],
})
export class HeatmapOverIframePage implements OnInit {

  urlIframe: string = 'https://www.marca.com';

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    this.initializeHeatmapOverIframe();
  }

  async initializeHeatmapOverIframe() {

    const options = {canvas: 'canvasOnTopIframe', debug: true, overlap: {parent: 'containerIframeCanvas'}};
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    const d = await Heatmap.setData(this.fakeHeatmapDataService.getData());
    console.log('d', d);
    console.time('draw');
    this.drawHeatmap();
    console.timeEnd('draw');
  }

  async drawHeatmap() {
    const options = {};
    const result = await Heatmap.draw(options);
  }

}
