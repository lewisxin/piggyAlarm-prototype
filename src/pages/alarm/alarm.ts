import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlarmSettingPage } from '../alarm-setting/alarm-setting';
import { AlarmRingPage } from '../alarm-ring/alarm-ring';
import { MediaPlugin, MediaObject } from "@ionic-native/media";
import { Vibration } from "@ionic-native/vibration";
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
  user: any = {
    name: 'Lewis',
    timeFormat: 'hh:mm A',
    gender: 'm'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private modalCtrl: ModalController,
    private media: MediaPlugin,
    private vibration: Vibration,
  ) {
    this.storage.ready().then(() => {
      this.storage.get('user').then((user) => {
        if (user) {
          this.user = user;
        }
      });
    });
  }

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

  toggleAlarm(alarm, i) {
    console.log('toggleAlarm');
    var on = false;
    if (!alarm.on) on = true;
    this.storage.ready().then(() => {
      this.alarmList[i].on = on;
      this.storage.set("alarmList", this.alarmList);
    })
  }

  editAlarm(alarm, i) {
    alarm.index = i;
    this.modalCtrl.create(AlarmSettingPage, { 'createNewAlarm': false, 'alarm': alarm }).present();
  }

  private interval;
  private alarmStop = false;
  private alarmMusic: MediaObject;
  // control status change of the music play event
  onStatusUpdate = (status) => {
    console.log("Media Status = " + status, "Interval = " + this.interval);
    if (status == 2) {
      this.interval = setInterval(() => {
        this.vibration.vibrate(1000);
      }, 500);
    }
    if (status == 4) {
      if (this.alarmStop) {
        clearInterval(this.interval);
      } else {
        this.alarmMusic.play();
      }
    }
  };

  ringAlarm(alarm) {
    this.alarmStop = false;
    // this.media.create('assets/music/file.wav', this.onStatusUpdate)
    //   .then((file: MediaObject) => {
    //     this.alarmMusic = file;
    //     this.alarmMusic.play();
    //     this.alarmMusic.setVolume(+alarm.volume / 100.0);
    let alarmRingModal = this.modalCtrl.create(AlarmRingPage, { alarm: alarm });
    // alarmRingModal.onDidDismiss(data => {
    //   console.log(data);
    //   this.stopAlarm();
    // })
    alarmRingModal.present();
    //   setTimeout(() => {
    //     // TODO: STOP ALARM, DISPLAY PAGE SHOWS THAT YOU MISSED THE GIFT
    //   }, 3 * 60 * 1000); // alarm auto stop in 3 min
    // });
  }

  stopAlarm() {
    this.alarmStop = true;
    this.alarmMusic.stop();
  }

}
