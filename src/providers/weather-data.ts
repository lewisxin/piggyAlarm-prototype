import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherData {
  // OpenWeatherMap API Config
  private apiEndPoint = 'http://api.openweathermap.org/data/2.5';
  private appId = '0d9300deba520b5a7887e89f1860c694';

  constructor(public http: Http) {
    console.log('Hello WeatherData Provider');
  }

  getCurrent(coords) {
    console.log('Getting current weather...');
    var url = this.apiEndPoint + "/weather" + '?lat=' + coords.latitude + '&lon=' + coords.longitude + "&APPID=" + this.appId;
    return this.http.get(url).map(res => {
      console.log(res.json());
      return res.json()
    });
  }

  get24HrForecast(coords) {
    console.log('Getting 24hr weather forecast...');

    var url = this.apiEndPoint + "/forecast" + '?lat=' + coords.latitude + '&lon=' + coords.longitude + "&APPID=" + this.appId;
    return this.http.get(url).map(res => {
      var data = res.json();
      let now = new Date();
      let tmr = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 24hr later
      data.list = data.list.filter(item => {
        let date = new Date(item.dt * 1000);
        return date >= now && date <= tmr
      });
      console.log(data);
      return data;
    });
  }

}
