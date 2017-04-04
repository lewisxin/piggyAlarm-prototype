import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App, Tabs } from 'ionic-angular';

/*
  Generated class for the AlarmSetting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm-setting',
  templateUrl: 'alarm-setting.html'
})
export class AlarmSettingPage {
  tabRef: Tabs;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmSettingPage');
    this.tabRef = this.navParams.data;
  }

  // cancel alarm settings
  cancel() {
    this.viewCtrl.dismiss();
  }

  // save alarm settings
  save(){
    this.viewCtrl.dismiss();
    this.tabRef.select(0);
  }

}
