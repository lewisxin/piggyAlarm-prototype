import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsGenderPage } from '../settings-gender/settings-gender';
import { SettingsNamePage } from '../settings-name/settings-name';
import { SettingsAvatarPage } from "../settings-avatar/settings-avatar";

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  user = {
    name: 'My Name',
    avatar: 'animals-0.svg',
    timeFormat: 'hh:mm A',
    is24Hour: false,
    gender: 'male'
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SettingsPage');
    this.storage.ready().then(() => {
      this.storage.get('user').then((user) => {
        if (user) {
          this.user = user;
        }
      });
    });
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave SettingsPage');
    this.save();
  }

  changeTimeFormat() {
    this.user.timeFormat = this.user.is24Hour ? 'HH:mm' : 'hh:mm A';
    this.save();
  }

  save() {
    this.storage.set('user', this.user);
  }

  openNameSettingsPage() {
    this.navCtrl.push(SettingsNamePage, { user: this.user });
  }

  openGenderSettingsPage() {
    this.navCtrl.push(SettingsGenderPage, { user: this.user });
  }

  openAvatarSettingsPage() {
    this.navCtrl.push(SettingsAvatarPage, { user: this.user });
  }

}
