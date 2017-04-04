import { Component, ViewChild } from '@angular/core';

import { AlarmPage } from '../alarm/alarm';
import { CouponPage } from '../coupon/coupon';
import { AlarmSettingPage } from '../alarm-setting/alarm-setting';
import { WeatherPage } from '../weather/weather';
import { SettingsPage } from '../settings/settings';
import { ModalController, ViewController, NavController, Tabs } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AlarmPage;
  tab2Root: any = CouponPage;
  tab3Root: any = AlarmSettingPage;
  tab4Root: any = WeatherPage;
  tab5Root: any = SettingsPage;

  @ViewChild('myTabs') tabRef: Tabs;
  
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) { }

  addAlarm() {
    let modal = this.modalCtrl.create(AlarmSettingPage, this.tabRef);
    modal.present();
  }

  goToTab(index: number) {
    this.navCtrl.parent.select(index);
  }
}
