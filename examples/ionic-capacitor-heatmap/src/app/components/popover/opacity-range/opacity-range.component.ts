import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-opacity-range',
  templateUrl: './opacity-range.component.html',
  styleUrls: ['./opacity-range.component.scss'],
})
export class OpacityRangeComponent implements OnInit {

  @Input() trigger: string;
  @Output() onChangeOpacity = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onClickChangeOpacity(event) {
    console.log('OpacityRangeComponent::onClickChangeOpacity method called', event.detail.value);
    this.onChangeOpacity.emit(event.detail.value);
  }

  customFormatter(value: number) {
    return `${parseFloat(value.toString()).toFixed(2)}`
  }

}
