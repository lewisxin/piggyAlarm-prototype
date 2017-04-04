import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  alarmList = [{
    'time': '09:50',
    'music': '', // selection from list
    'label': 'Alarm', // default 'Alarm'
    "on": true
  },
  {
    'time': '08:20',
    'music': '', // selection from list
    'label': 'Alarm', // default 'Alarm'
    "on": true
  }];
  timeFormat = 'HH:mm'; // timeFormat = 'hh:mm'

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmPage');
  }

}
