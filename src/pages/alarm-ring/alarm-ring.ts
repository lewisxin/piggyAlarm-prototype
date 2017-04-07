import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { CouponDetailsPage } from '../coupon-details/coupon-details';
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
  user: any = {
    name: 'Lewis',
    timeFormat: 'hh:mm A',
    gender: 'm'
  };
  alarm: any;
  sliderPosition: number;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
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
    console.log('ionViewWillEnter AlarmRingPage');
    this.alarm = this.navParams.data.alarm;
    console.log(this.alarm)
    this.getExpireDate();
    this.couponList.map(e => {
      e['expire'] = this.expire;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmRingPage');
  }

  stopAlarm() {
    this.viewCtrl.dismiss({ stopAlarm: true })
  }

  onCouponClick(coupon) {
    console.log('coupon clicked ');
    this.modalCtrl.create(CouponDetailsPage, { coupon: coupon }).present();
  }

  expire: Date;
  getExpireDate() {
    var date = new Date();
    var alarmTime = this.alarm.time;
    var hour = +alarmTime.split(':')[0];
    var minute = +alarmTime.split(":")[1];
    date.setHours(hour);
    date.setMinutes(minute);
    this.expire = new Date(date.getTime() + 12 * 60 * 60 * 1000);
  }

  // fake data
  couponList = [{
    id: 1,
    img: 'starbucks-drink-resized.png',
    title: 'Coffee 1-4-1',
    location: 'Starbucks',
    description: 'Enjoy this exclusive Starbucks 1-4-1 coupon with your friend today! Redeem before it gets expired!',
    address: {
      name: '8 College Avenue West #B1-01 (Education Resource Centre) Singapore 138608, Singapore 138608',
      lat: 0,
      lng: 0,
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.158072430751!2d103.76574321069393!3d1.3011769233405084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7e209070eeea541!2sStarbucks!5e0!3m2!1sen!2ssg!4v1491562632857'
    }
  },
  {
    id: 2,
    img: 'breakfast-salad.jpeg',
    title: 'Mini Salad',
    location: 'Platypus Foodbar',
    description: 'Feeling hugry? Come and visit Platypus Foodbar at NUS Science Canteen. You can enjoy a S$4 worth of mini salad bowl for free!',
    address: {
      name: '12 Science Drive 2, Singapore 117549',
      lat: 0,
      lng: 0,
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11801.942869542!2d103.77236907960953!3d1.2987950661241152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda78b2144eec4b8d!2sPlatypus+Foodbar!5e0!3m2!1sen!2ssg!4v1491562437728'
    }
  },
  {
    id: 3,
    img: 'subway-3-dollar-voucher.png',
    title: '$3 Voucher',
    location: 'Subway YIH',
    description: 'S$3 off for your customized subway sandwich. Come and visit our store at Yusof Ishak House today!',
    address: {
      name: '31 Lower Kent Ridge Road, #01-06 Yusof Ishak House National University, Yusof Ishak House, Singapore 119078',
      lat: 0,
      lng: 0,
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7895604840346!2d103.77230929985333!3d1.3011501241851653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f223dfa8265fe06!2sSubway!5e0!3m2!1sen!2ssg!4v1491562593481'
    }
  }, {
    id: 4,
    img: 'koufu-breakfast.png',
    title: 'Classic Set',
    location: 'Koufu Utown',
    description: 'Wish to have a local favourite breakfast set? Visit Koufu and you can have our classic set for free. Set includes 2 soft-boiled eggs, 1 kaya toast and 1 coffee or tea of your choice!',
    address: {
      name: '1 CREATE way, 1 Create Way, CREATE Campus, Singapore 138602',
      lat: 0,
      lng: 0,
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.785049904689!2d103.77171331468493!3d1.3039995620844487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1af5e79811bb%3A0xbb18b0cd5848819d!2sKoufu!5e0!3m2!1sen!2ssg!4v1491562509695'
    }
  }];

}
