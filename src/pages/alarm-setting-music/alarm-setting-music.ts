import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ConfigData } from "../../providers/config-data";
import * as _ from 'lodash';


/*
  Generated class for the AlarmSettingMusic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm-setting-music',
  templateUrl: 'alarm-setting-music.html'
})
export class AlarmSettingMusicPage {
  songListByCategory = [];
  alarm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private config: ConfigData, public viewCtrl: ViewController) {
    this.alarm = this.navParams.data.alarm;
  }

  ionViewWillLoad() {
    this.config.getConfig().subscribe(data => {
      let listByCategory = _.groupBy(data, "category");
      for (let key in listByCategory) {
        this.songListByCategory.push({ 'key': key, 'value': listByCategory[key] });
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmSettingMusicPage');
  }

  back() {
    this.viewCtrl.dismiss();
  }
}
