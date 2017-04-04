import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the AlarmSettingLabel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm-setting-label',
  templateUrl: 'alarm-setting-label.html'
})
export class AlarmSettingLabelPage {
  alarm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ionViewWillLoad() {
    console.log('ionViewWillLoad AlarmSettingLabelPage');
    this.alarm = this.navParams.data.alarm;
  }

  back(){
    this.viewCtrl.dismiss();
  }
}
