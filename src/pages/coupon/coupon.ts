import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CouponRedeemPage } from '../coupon-redeem/coupon-redeem';
import { Storage } from '@ionic/storage';


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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    private alertCtrl: AlertController
  ) { }
  public couponList = [];

  ionViewWillLoad() {
    console.log('ionViewWillLoad CouponPage');
    this.storage.ready().then(() => {
      this.storage.get('couponList').then(couponList => {
        this.couponList = couponList;
        console.log(couponList);
      })
    })
  }

  redeemCoupon(coupon) {
    this.navCtrl.push(CouponRedeemPage, { coupon: coupon });
  }

  deleteCoupon(coupon, index) {
    console.log('deleteCoupon');

    let alert = this.alertCtrl.create({
      title: 'Confirm Delete Coupon',
      cssClass: 'myAlert',
      message: 'Deleted coupon cannot be restored! <br> Are you sure you want to remove it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          role: 'danger',
          handler: () => {
            console.log('Delete clicked');
            this.storage.ready().then(() => {
              this.couponList.splice(index, 1);
              this.storage.set('couponList', this.couponList);
            })
          }
        }
      ]
    });
    alert.present();
  }

}
