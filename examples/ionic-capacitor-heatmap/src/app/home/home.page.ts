import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

import { Heatmap } from 'capacitor-heatmap';

import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { IHeatmapOptions, IHeatmapType } from 'capacitor-heatmap/dist/esm/models/models';

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data2 = [
    {x: 38, y: 20, thickness: 2},
    {x: 38, y: 690, thickness: 3},
    {x: 48, y: 30, thickness: 1}
  ];

  @HostListener('window:resize', ['$event']) async onResize(event) {
    this.resizeHeatmap(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) {
    console.log('HomePage::constructor() | method called');
    console.log('data2', this.data2);
  }

  ngOnInit() {
    console.log('HomePage::ngOnInit() | method called');
    this.initializeHeatmap();
  }

  ionViewWillEnter() {
    console.log('HomePage::ionViewWillEnter() | method called');
  }

  ionViewWillLeave(){
    console.log('HomePage::ionViewWillLeave() | method called');
  }

  async initializeHeatmap() {

    const options: IHeatmapOptions = {canvas: 'testCanvas', type: IHeatmapType.Simple, debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    Heatmap.setMax(18);

    if ((result.value.width > window.innerWidth) || (result.value.height > window.innerHeight)) {
      this.resizeHeatmap(window.innerWidth, window.innerHeight);
    }

    result.value.onmousemove = (e) => {
      const rect = result.value.getBoundingClientRect();
      const newPoint: Array<number> = [e.clientX - rect.left, e.clientY - rect.top, 18];
      const resultAddPoint = Heatmap.addPoint(newPoint);
      console.log('resultAddPoint', resultAddPoint);
      // this.frame = this.frame || window.requestAnimationFrame(this.drawHeatmap);
      window.requestAnimationFrame(this.drawHeatmap);
    };

    const d = await Heatmap.setData(this.fakeHeatmapDataService.getData());
    console.log('d', d);
    console.time('draw');
    this.drawHeatmap();
    console.timeEnd('draw');
  }

  async drawHeatmap() {
    const options = {};
    const result = await Heatmap.draw(options);
    // this.frame = null;
  }

  onClickResize() {
    console.log('HomePage::onClickResize() | method called');
    this.resizeHeatmap(500, 300);
  }

  async resizeHeatmap(width: number, height: number) {
    const options = {width, height};
    const elements = document.getElementsByClassName('container');
    const element = elements.item(0) as HTMLElement;
    element.style.width = options.width + 'px';
    element.style.height = options.height + 'px';
    const resultResize = await Heatmap.resize(options);
    console.log('result resize', resultResize);
  }

  onClickDestroy() {
    console.log('HomePage::onClickDestroy() | method called');
    document.getElementById('testCanvas').onmousemove = null;
    Heatmap.destroy();
  }

}
