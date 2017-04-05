import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the AlarmRing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm-ring',
  templateUrl: 'alarm-ring.html'
})
export class AlarmRingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmRingPage');
  }

  stopAlarm() {
    this.viewCtrl.dismiss({ stopAlarm: true })
  }

}
