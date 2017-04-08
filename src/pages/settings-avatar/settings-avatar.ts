import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SettingsAvatar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings-avatar',
  templateUrl: 'settings-avatar.html'
})
export class SettingsAvatarPage {
  private user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter SettingsAvatarPage');
    this.user = this.navParams.data.user;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave SettingsAvatarPage');
    this.storage.set('user', this.user);
  }

  selectAvatar(avatar) {
    this.user.avatar = avatar.img;
    this.navCtrl.pop();
  }

  avatarList = [
    { img: 'animals-0.svg', name: 'Piggy' },
    { img: 'animals-1.svg', name: 'Tiger' },
    { img: 'animals-2.svg', name: 'Foxie' },
    { img: 'animals-3.svg', name: 'Pepper' },
    { img: 'animals-4.svg', name: 'Fluffy' },
    { img: 'animals-5.svg', name: 'Hippony' },
    { img: 'animals-6.svg', name: 'Zibba' },
    { img: 'animals-7.svg', name: 'Mooney' },
    { img: 'animals-8.svg', name: 'Koalala' }
  ]
}
