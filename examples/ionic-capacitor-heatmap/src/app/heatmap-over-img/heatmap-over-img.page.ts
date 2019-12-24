import { Component, OnInit } from '@angular/core';
import { Heatmap } from 'capacitor-heatmap';
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { IHeatmapOptions, IHeatmapType } from 'capacitor-heatmap/dist/esm/models/models';
import { RouteEventsService } from '../services/route-events.service';

@Component({
  selector: 'app-heatmap-over-img',
  templateUrl: './heatmap-over-img.page.html',
  styleUrls: ['./heatmap-over-img.page.scss'],
})
export class HeatmapOverImgPage implements OnInit {

  urlImg = 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg';

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) {
  }

  ngOnInit() {
    this.initializeHeatmapOverImg();
  }

  ionViewWillEnter() {
    console.log('HeatmapOverImgPage::ionViewWillEnter() | method called');
  }

  ionViewWillLeave(){
    console.log('HeatmapOverImgPage::ionViewWillLeave() | method called');
  }

  async initializeHeatmapOverImg() {

    const options: IHeatmapOptions = {element: 'testHeatmapImg', type: IHeatmapType.Simple, debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    Heatmap.setMax(18);

    const d = await Heatmap.setData(this.fakeHeatmapDataService.getData());
    console.log('d', d);
    console.time('draw');
    await this.drawHeatmap();
    console.timeEnd('draw');
  }

  async drawHeatmap() {
    const options = {opacity: 0.05};
    const result = await Heatmap.draw(options);
  }

}
