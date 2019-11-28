import { Component, OnInit, HostListener } from '@angular/core';

import { Heatmap } from 'capacitor-heatmap';

import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';

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
    console.log('data2', this.data2);
  }

  ngOnInit() {
    console.log('HomePage::ngOnInit() | method called');
    console.log(window.innerWidth, window.innerHeight);
    this.initializeHeatmap();
  }

  async initializeHeatmap() {

    const options = {canvas: 'testCanvas', debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    if ((result.value.width > window.innerWidth) || (result.value.height > window.innerHeight)) {
      this.resizeHeatmap(window.innerWidth, window.innerHeight);
    }

    result.value.onmousemove = (e) => {
      console.log([e.clientX, e.clientY]);
      const rect = result.value.getBoundingClientRect();
      console.log([e.clientX - rect.left, e.clientY - rect.top]);
      const resultAddPoint = Heatmap.addPoint([e.clientX - rect.left, e.clientY - rect.top, 18]);
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

}
