import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SettingsGender page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings-gender',
  templateUrl: 'settings-gender.html'
})
export class SettingsGenderPage {
  user = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SettingsGenderPage');
    this.user = this.navParams.data.user;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave SettingsGenderPage');
    this.storage.set('user', this.user);
  }
}
