import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


/*
  Generated class for the CouponDetailsLocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coupon-details-location',
  templateUrl: 'coupon-details-location.html'
})
export class CouponDetailsLocationPage {
  url: String;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) { }

  ionViewWillLoad() {
    console.log('ionViewWillLoad CouponDetailsLocationPage');
    this.url = this.navParams.data.url;
  }

  back() {
    
    this.viewCtrl.dismiss();
  }

}
