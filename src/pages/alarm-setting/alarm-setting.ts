import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App, Tabs, ModalController } from 'ionic-angular';
import { AlarmSettingLabelPage } from "../alarm-setting-label/alarm-setting-label";

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
  alarm = {
    'time': '08:00',
    'music': '', // selection from list
    'label': 'Alarm', // default 'Alarm'
    "on": true
  };
  createNew = true;
  timeFormat = 'hh:mm A' // 'HH:mm'

  constructor(public navCtrl: NavController,
  public modalCtrl: ModalController,
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController) { }

  ionViewWillLoad() {
    console.log('ionViewWillLoad AlarmSettingPage');
    if (this.navParams.data && this.navParams.data.createNewAlarm == false) {
      this.createNew = false;
    }
    if (this.navParams.data && this.navParams.data.alarm){
      this.alarm = this.navParams.data.alarm;
    }
    console.log(this.createNew)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmSettingPage');
    this.tabRef = this.navParams.data.tabRef;
  }

  // cancel alarm settings
  cancel() {
    this.viewCtrl.dismiss();
  }

  // save alarm settings
  save() {
    this.viewCtrl.dismiss();
    this.tabRef.select(0);
  }
  
  // handle time value change event
  onTimeSelection() {
    console.log(this.alarm);
    // remind user how long can he/she sleep
  }

  openAlarmLabelSettingPage(){
     this.modalCtrl.create(AlarmSettingLabelPage, { alarm: this.alarm }).present();
  }

}
