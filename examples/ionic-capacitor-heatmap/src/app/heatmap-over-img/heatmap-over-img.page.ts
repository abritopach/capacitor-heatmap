import { Component, OnInit } from '@angular/core';
import { Heatmap } from 'capacitor-heatmap';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';

@Component({
  selector: 'app-heatmap-over-img',
  templateUrl: './heatmap-over-img.page.html',
  styleUrls: ['./heatmap-over-img.page.scss'],
})
export class HeatmapOverImgPage implements OnInit {

  urlImg: string = 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg';

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) { }

  ngOnInit() {
    this.initializeHeatmapOverImg();
  }

  async initializeHeatmapOverImg() {

    const options = {canvas: 'canvasOnTopImg', debug: true, overlap: {parent: 'containerImgCanvas'}};
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
