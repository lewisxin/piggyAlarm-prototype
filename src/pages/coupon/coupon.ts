import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CouponRedeemPage } from '../coupon-redeem/coupon-redeem';

/*
  Generated class for the Coupon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  public couponList = [
    {
      'img': 'starbucks-1-for-1.png',
      'title': 'Starbucks 1 For 1',
      'description': 'Enjoy this exclusive Starbucks 1-4-1 coupon with your friend today! Redeem before it gets expired!',
      'expire': new Date(),
      'address': ''
    }
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
  }

  redeemCoupon(coupon) {
    this.navCtrl.push(CouponRedeemPage, coupon);
  }

}
