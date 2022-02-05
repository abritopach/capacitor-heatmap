import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
})
export class RangeComponent implements OnInit {

  @Input() trigger: string;
  @Input() defaultValue: number = 0.5;
  @Input() min: number = 0;
  @Input() max: number = 1;
  @Input() step: number = 0.01;
  @Input() startIcon: string = 'sunny';
  @Input() endIcon: string = 'sunny';
  @Output() onChangeValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onClickChangeValue(event) {
    console.log('RangeComponent::onClickChangeValue method called', event.detail.value);
    this.onChangeValue.emit(event.detail.value);
  }

  customFormatter(value: number) {
    return `${parseFloat(value.toString()).toFixed(2)}`
  }

}
