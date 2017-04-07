import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CouponDetailsLocationPage } from '../coupon-details-location/coupon-details-location';
import { Storage } from '@ionic/storage';
import { TabsPage } from "../tabs/tabs";
import * as _ from 'lodash';

/*
  Generated class for the CouponDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon-details',
  templateUrl: 'coupon-details.html'
})
export class CouponDetailsPage {
  coupon: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private storage: Storage
  ) { }

  ionViewWillLoad() {
    this.coupon = this.navParams.data.coupon;
    console.log('ionViewWillLoad CouponDetailsPage', this.coupon);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponDetailsPage');
  }

  checkLocation() {
    this.modalCtrl.create(CouponDetailsLocationPage, { url: this.coupon.address.url }).present();
  }

  back() {
    this.viewCtrl.dismiss();
  }

  addCoupon() {
    this.storage.ready().then(() => {
      this.storage.get('couponList').then((couponList: Array<Object>) => {
        if (!couponList || _.isEmpty(couponList)) {
          this.storage.set('couponList', [this.coupon]);
        } else {
          couponList.push(this.coupon)
          this.storage.set('couponList', couponList);
        }
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(TabsPage, { tab: 1 });
      })
    })
  }
}
