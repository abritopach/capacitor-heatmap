// Angular
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

// Third parties
import { Heatmap } from 'capacitor-heatmap';
import { HeatmapOptions, HeatmapType, HeatmapGradient, HeatmapDrawOptions, HeatmapPosition,
  VerticalPosition, HorizontalPosition } from 'capacitor-heatmap/dist/esm/models/models';

/* Project */

// Services
import { FakeHeatmapDataService } from '../services/fake-heatmap-data.service';
import { CommonService } from '../services/common.service';

window.requestAnimationFrame = window.requestAnimationFrame || window['webkitRequestAnimationFrame'];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('myContent', {read: ElementRef}) myContent: ElementRef;

  currentYear = new Date().getFullYear();

  changedGradient = false;
  changedRadius = false;
  radius = 20;
  opacity = 0.5;

  DEFAULT_GRADIENT: HeatmapGradient = {
    0.4: 'blue',
    0.6: 'cyan',
    0.7: 'lime',
    0.8: 'yellow',
    1.0: 'red'
  };
  gradient = this.DEFAULT_GRADIENT;
  destroy = false;
  heatmapCanvas: HTMLCanvasElement = null;

  @HostListener('window:resize', ['$event']) async onResize(event) {
    console.log('event.target.innerWidth', event.target.innerWidth, 'event.target.innerHeight', event.target.innerHeight);
    if (this.myContent) {
      this.resizeHeatmap(this.myContent.nativeElement.offsetWidth, this.myContent.nativeElement.offsetHeight);
    }
  }

  constructor(public fakeHeatmapDataService: FakeHeatmapDataService, private commonService: CommonService) {
    console.log('HomePage::constructor() | method called');
  }

  ngOnInit() {
    console.log('HomePage::ngOnInit() | method called');
  }

  initialize() {
    this.changedGradient = false;
    this.changedRadius = false;
    this.destroy = false;
    this.heatmapCanvas = null;
    this.radius = 20;
    this.gradient = this.DEFAULT_GRADIENT;
  }

  ionViewWillEnter() {
    console.log('HomePage::ionViewWillEnter() | method called');
    this.initialize();
    this.initializeHeatmap();
  }

  ionViewWillLeave() {
    console.log('HomePage::ionViewWillLeave() | method called');
  }

  async initializeHeatmap() {

    const options: HeatmapOptions = {element: 'testHeatmap', type: HeatmapType.Simple, debug: true,
    colorScale: {show: true, position: {vertical: VerticalPosition.TOP, horizontal: HorizontalPosition.END}, text: {start: 'FRÍO', end: 'CALIENTE'}} };
    const result = await Heatmap.initialize(options);
    console.log('result', result);

    this.heatmapCanvas = result.value as HTMLCanvasElement;

    Heatmap.setMax(10);

    if ((this.heatmapCanvas.width > window.innerWidth) || (this.heatmapCanvas.height > window.innerHeight)) {
      this.resizeHeatmap(window.innerWidth, window.innerHeight);
    }

    this.heatmapCanvas.onmousemove = (e) => {
      const rect = this.heatmapCanvas.getBoundingClientRect();
      const newPoint: Array<number> = [e.clientX - rect.left, e.clientY - rect.top, 18];
      const resultAddPoint = Heatmap.addPoint(newPoint);
      console.log('resultAddPoint', resultAddPoint);
      window.requestAnimationFrame(() => { this.drawHeatmap() });
    };

    const d = await Heatmap.setData(this.fakeHeatmapDataService.getData());
    console.log('d', d);
    console.time('draw');
    this.drawHeatmap();
    console.timeEnd('draw');
  }

  async drawHeatmap() {
    const options: HeatmapDrawOptions = {radius: this.radius, gradient: this.gradient};
    const resultDraw = await Heatmap.draw(options);
    console.log('result draw', resultDraw);
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
    const resultAddData = await Heatmap.setData(this.fakeHeatmapDataService.getData1());
    console.log('result add data', resultAddData);
  }

  onClickAddPoint() {
    this.addPoint();
  }

  async addPoint() {
    const resultAddPoint = await Heatmap.addPoint([38, 20, 20]);
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
    const resultGradient = await Heatmap.gradient(this.gradient);
    console.log('resultGradient', resultGradient);
  }

  onClickChangeOpacity(opacity: number) {
    this.opacity = opacity;
    this.changeOpacity(opacity);
  }

  async changeOpacity(opacity: number) {
    const resultChangeOpacity = await Heatmap.opacity(opacity);
    console.log('resultChangeOpacity', resultChangeOpacity);
  }

  onClickChangeRadius() {
    this.changeRadius();
  }

  async changeRadius() {
    this.changedRadius = !this.changedRadius;
    this.radius = this.changedRadius ? 30 : 20;
    const resultRadius = await Heatmap.radius(this.radius);
    console.log('resultRadius', resultRadius);
  }

  onClickGetValueAt() {
    this.getValueAt();
  }

  async getValueAt() {
    const position: HeatmapPosition = {x: 949, y: 120};
    const resultValueAt = await Heatmap.getValueAt(position);
    console.log('resultValueAt', resultValueAt);
  }

  onClickResize() {
    this.resizeHeatmap(500, 300);
  }

  async resizeHeatmap(width: number, height: number) {
    const options = {width, height};
    const resultResize = await Heatmap.resize(options);
    console.log('result resize', resultResize);
  }

  onClickDestroy() {
    this.destroy = !this.destroy;
    this.heatmapCanvas.onmousemove = null;
    this.destroyHeatmap();
  }

  async destroyHeatmap() {
    const resultDestroy = await Heatmap.destroy();
    console.log('resultDestroy', resultDestroy);
  }

  onClickGetImage() {
    this.getHeatmapImage();
  }

  async getHeatmapImage() {
    const resultGetImage = await Heatmap.getDataURL('image/png', 1);
    console.log('resultGetImage', resultGetImage);
    this.commonService.presentToastWithOptions(resultGetImage.value);
  }

}
