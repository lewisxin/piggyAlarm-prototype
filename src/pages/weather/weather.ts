import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { WeatherData } from '../../providers/weather-data';
import * as _ from 'lodash';
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
  user = {
    gender: 'male',
    name: '',
    timeFormat: 'hh:ss A'
  }
  top: String;
  bottom: String;
  forecast = [];
  weather: any = {
    main: {}
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private weatherService: WeatherData,
    private alertCtrl: AlertController
  ) { }


  private loadWeatherData() {
    let loading = this.loadingCtrl.create({
      content: '<h6 style="font-weight:200">Refreshing weather data...</h6>'
    });
    loading.present();

    this.geolocation.getCurrentPosition()
      .then((resp) => {
        // console.log(resp);
        let firstData;
        this.weatherService.getCurrent(resp.coords).subscribe((data) => {
          firstData = data;
        })
        this.weatherService.get24HrForecast(resp.coords).subscribe((data) => {
          // data loaded, dismiss loading
          loading.dismiss();
          this.forecast = data.list.map(e => {
            e.city = data.city;
            return e;
          })
          if (new Date(firstData.dt * 1000).getHours() < new Date(this.forecast[0].dt * 1000).getHours()) {
            firstData.city = data.city;
            this.forecast.splice(0, 0, firstData);
          }
          this.weather = this.forecast[0];
          // console.log(this.forecast);
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Cannot Find Your Location',
          subTitle: 'Please go to Settings > Privacy and turn on location for piggyAlarm :)',
          buttons: ['Ok']
        });
        alert.present();
      });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter WeatherPage')
    if (!_.isEmpty(this.forecast)) {
      var now = new Date();
      now.setMinutes(0);
      now.setSeconds(0);
      var firstDate = new Date(this.forecast[1].dt * 1000)
      console.log(now, firstDate)
      if (now >= firstDate) {
        // if the first weather data has expired, reload the data
        console.log('first data expired')
        this.loadWeatherData();
      }
    } else {
      // initialize data when first time enter the page
      console.log('first load data')
      this.loadWeatherData();
    }
    this.updateClothesUrl();
  }

  timeChange(bar) {
    console.log('WeatherPage timeChange', bar.value);
    this.weather = this.forecast[bar.value - 1];
  }

  updateClothesUrl() {
    switch (this.user.gender) {
      case 'male': default:
        this.top = '023-shirt-2.svg';
        this.bottom = '008-beach.svg';
        break;
      case 'female':
        this.top = '013-fashion.svg';
        this.bottom = '009-clothes-7.svg';
        break;
    }
  }
}
