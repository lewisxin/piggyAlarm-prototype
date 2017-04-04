import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App, ModalController } from 'ionic-angular';
import { AlarmSettingLabelPage } from "../alarm-setting-label/alarm-setting-label";
import { AlarmSettingMusicPage } from "../alarm-setting-music/alarm-setting-music";
import { TabsPage } from "../tabs/tabs";
import { Storage } from '@ionic/storage';

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
  alarm: any;
  createNew = true;
  timeFormat = 'hh:mm A' // 'HH:mm'
  alarmList: any

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController,
    private storage: Storage) { }

  ionViewWillLoad() {
    console.log('ionViewWillLoad AlarmSettingPage');
    if (this.navParams.data && this.navParams.data.createNewAlarm == false) {
      this.createNew = false;
    }
    if (this.navParams.data && this.navParams.data.alarm) {
      this.alarm = this.navParams.data.alarm;
    }
    console.log(this.createNew)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmSettingPage');
    this.storage.ready().then(() => {
      this.storage.get('alarmList').then((alarmList) => {
        this.alarmList = alarmList;
      })
    })
  }

  // cancel alarm settings
  cancel() {
    this.viewCtrl.dismiss();
  }

  // save alarm settings
  save() {
    this.storage.ready().then(() => {
      this.storage.get('alarmList').then((alarmList) => {
        // console.log(alarmList);
        if (alarmList) {
          if (this.createNew) {
            alarmList.push(this.alarm);
            alarmList.sort((a, b) => {
              if (a.time < b.time) {
                return -1;
              } else if (a.time > b.time) {
                return 1;
              } else {
                return 0;
              }
            })
          } else {
            alarmList[this.alarm.index] = this.alarm;
          }
          this.storage.set('alarmList', alarmList);
        } else {
          this.storage.set('alarmList', []);
        }
        this.alarmList = alarmList;
      })
    })
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(TabsPage);
  }

  // handle time value change event
  onTimeSelection() {
    console.log(this.alarm);
    // remind user how long can he/she sleep
  }

  deleteAlarm(alarm) {
    this.storage.ready().then(() => {
      this.alarmList.splice(alarm.index, 1);
      this.storage.set("alarmList", this.alarmList);
      this.viewCtrl.dismiss();
      this.navCtrl.setRoot(TabsPage);
    })
  }

  openAlarmLabelSettingPage() {
    this.modalCtrl.create(AlarmSettingLabelPage, { alarm: this.alarm }).present();
  }
  openAlarmMusicSettingPage() {
    this.modalCtrl.create(AlarmSettingMusicPage, { alarm: this.alarm }).present();
  }

}
