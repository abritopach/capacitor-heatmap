import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ShowImageModalComponent } from '../components/modals/show-image-modal/show-image-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastController: ToastController, private modalController: ModalController) { }

  async presentToastWithOptions(img: string) {
    const toast = await this.toastController.create({
      header: 'Take screenshot',
      message: 'New heatmap capture taken',
      position: 'bottom',
      color: 'tertiary',
      duration: 3000,
      buttons: [
        {
          side: 'end',
          icon: 'eye',
          text: ' Show',
          handler: () => {
            this.presentHeatmapScreenshotModal(img)
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentHeatmapScreenshotModal(img: string) {
    const componentProps = { img};
    const modal = await this.modalController.create({
      component: ShowImageModalComponent,
      componentProps
    });
    return await modal.present();
  }
}
