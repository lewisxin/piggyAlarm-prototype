import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

/*
  Generated class for the CouponRedeem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon-redeem',
  templateUrl: 'coupon-redeem.html'
})
export class CouponRedeemPage {
  coupon: any;
  user: any = {
    name: 'Lewis',
    timeFormat: 'hh:mm A',
    gender: 'male'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
  ) {
    this.storage.ready().then(() => {
      this.storage.get('user').then((user) => {
        if (user) {
          this.user = user;
        }
      });
    })
  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad CouponRedeemPage');
    this.coupon = this.navParams.data.coupon;
  }

}
