import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConfigData {

  constructor(public http: Http) {
    console.log('Hello ConfigData Provider');
  }

  getConfig() {
    var url = "../assets/data/config.json";
    return this.http.get(url).map(res => { 
      console.log(res.json().songList);
      return res.json().songList
    })
  }

}
