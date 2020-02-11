import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/';
// import { StatusBar } from '@ionic-native/status-bar/';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RouteEventsService } from './services/route-events.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    // StatusBar,
    // SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RouteEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
