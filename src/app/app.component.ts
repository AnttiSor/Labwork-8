
import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
//import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

//import { Login } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;
  public zone:NgZone

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) 
  {
    this.zone = new NgZone({});
    const config = {
      apiKey: "AIzaSyDZcuwQEKbwqehg6wMFdR-V45kHu7JgqTk",
    authDomain: "labwork-8-8abaf.firebaseapp.com",
    databaseURL: "https://labwork-8-8abaf.firebaseio.com",
    projectId: "labwork-8-8abaf",
    storageBucket: "labwork-8-8abaf.appspot.com",
    messagingSenderId: "380487223605"
  };

  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged( user => {
    this.zone.run(  () => {
      if (!user) {
        this.rootPage = 'LoginPage';
      } else {
        this.rootPage = TabsPage
      }
    });
  });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
