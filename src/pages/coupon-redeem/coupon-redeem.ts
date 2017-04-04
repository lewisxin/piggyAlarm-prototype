import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponRedeemPage');
    this.coupon = this.navParams.data;
  }

}
