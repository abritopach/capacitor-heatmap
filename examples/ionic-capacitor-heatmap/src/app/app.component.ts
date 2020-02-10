import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Default Heatmap',
      url: '/home',
      icon: 'flame'
    },
    {
      title: 'Heatmap over Iframe',
      url: '/heatmap-over-iframe',
      icon: 'flame'
    },
    {
      title: 'Heatmap over Img',
      url: '/heatmap-over-img',
      icon: 'flame'
    },
    {
      title: 'Google Maps Heatmap',
      url: '/google-maps-heatmap',
      icon: 'flame'
    },
    {
      title: 'Leaflet Maps Heatmap',
      url: '/leaflet-maps-heatmap',
      icon: 'flame'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
