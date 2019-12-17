import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

import { Heatmap } from 'capacitor-heatmap';

import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { IHeatmapOptions, IHeatmapType, HeatmapGradient } from 'capacitor-heatmap/dist/esm/models/models';

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

  @HostListener('window:resize', ['$event']) async onResize(event) {
    this.resizeHeatmap(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService) {
    console.log('HomePage::constructor() | method called');
  }

  ngOnInit() {
    console.log('HomePage::ngOnInit() | method called');
  }

  ionViewWillEnter() {
    console.log('HomePage::ionViewWillEnter() | method called');
    this.initializeHeatmap();
  }

  ionViewWillLeave() {
    console.log('HomePage::ionViewWillLeave() | method called');
  }

  async initializeHeatmap() {

    const options: IHeatmapOptions = {canvas: 'testCanvas', type: IHeatmapType.Simple, debug: true};
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    const canvas: HTMLCanvasElement = result.value as HTMLCanvasElement;

    Heatmap.setMax(18);

    if ((canvas.width > window.innerWidth) || (canvas.height > window.innerHeight)) {
      this.resizeHeatmap(window.innerWidth, window.innerHeight);
    }

    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
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
    const options = {opacity: 0.05, radius: 20};
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

  onClickChangeOpacity() {
    console.log('onClickChangeOpacity');
    this.changeOpacity();
  }

  async changeOpacity() {
    this.changedOpacity = !this.changedOpacity;
    console.log('this.changedOpacity', this.changedOpacity);
    await Heatmap.opacity(this.changedOpacity ? 0.1 : 0.05);
  }

  onClickClearData() {
    this.clearData();
  }

  async clearData() {
    await Heatmap.clearData();
  }

  onClickAddData() {
    this.addData();
  }

  async addData() {
    await Heatmap.setData(this.fakeHeatmapDataService.getData1());
  }

  onClickAddPoint() {
    this.addPoint();
  }

  async addPoint() {
    await Heatmap.addPoint([38, 20, 20]);
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
    await Heatmap.gradient(this.changedGradient ? gradient : this.DEFAULT_GRADIENT);
  }

  onClickChangeRadius() {
    this.changeRadius();
  }

  async changeRadius() {
    this.changedRadius = !this.changedRadius;
    await Heatmap.radius(this.changedRadius ? 30 : 20);
  }

}
