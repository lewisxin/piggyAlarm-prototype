import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlarmSettingPage } from '../alarm-setting/alarm-setting'
// import * as moment from 'moment';
/*
  Generated class for the Alarm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {
  alarmList = [];
  timeFormat = 'HH:mm'; // timeFormat = 'hh:mm'

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private modalCtrl: ModalController) { }

  ionViewWillEnter() {
    // console.log(moment("2013-12-21"));
    console.log('ionViewWillEnter AlarmPage');

    this.storage.ready().then(() => {
      this.storage.get('alarmList').then((val) => {
        this.alarmList = val;
      })
      this.storage.get('timeFormat').then((val) => {
        this.timeFormat = val ? val : 'HH:mm';
      })
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmPage');
  }

  deleteAlarm(i) {
    this.storage.ready().then(() => {
      this.alarmList.splice(i, 1);
      this.storage.set("alarmList", this.alarmList);
    })
  }

  toggleAlarm(alarm, i){
    console.log('toggleAlarm');
    var on = false;
    if(!alarm.on) on = true;
    this.storage.ready().then(() => {
      this.alarmList[i].on = on;
      this.storage.set("alarmList", this.alarmList);
    })
  }

  editAlarm(alarm, i) {
    alarm.index = i;
    this.modalCtrl.create(AlarmSettingPage, { 'createNewAlarm': false, 'alarm': alarm }).present();
  }

}
