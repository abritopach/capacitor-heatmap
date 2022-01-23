import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-show-image-modal',
  templateUrl: './show-image-modal.component.html',
  styleUrls: ['./show-image-modal.component.scss'],
})
export class ShowImageModalComponent implements OnInit {

  imgSrc = '';

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    console.log(this.navParams.data);
    this.imgSrc = this.navParams.data.img;
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
