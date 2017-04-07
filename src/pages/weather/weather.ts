import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


/*
  Generated class for the Weather page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController
  ) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
    // let loading = this.loadingCtrl.create({
    //   content: 'We are loading weather data for you :)<br>Please Wait..'
    // });
    // loading.present();
  }

}
