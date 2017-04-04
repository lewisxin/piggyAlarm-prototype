import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// main app pages
import { AlarmPage } from '../pages/alarm/alarm';
import { CouponPage } from '../pages/coupon/coupon';
import { AlarmSettingPage } from '../pages/alarm-setting/alarm-setting';
import { WeatherPage } from '../pages/weather/weather';
import { SettingsPage } from '../pages/settings/settings';
// other app pages
import { AlarmRingPage } from '../pages/alarm-ring/alarm-ring';
import { AlarmSettingMusicPage } from '../pages/alarm-setting-music/alarm-setting-music';
import { CouponRedeemPage } from '../pages/coupon-redeem/coupon-redeem';
// util pages
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AlarmPage,
    CouponPage,
    AlarmSettingPage,
    WeatherPage,
    SettingsPage,
    AlarmRingPage,
    AlarmSettingMusicPage,
    CouponRedeemPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlarmPage,
    CouponPage,
    AlarmSettingPage,
    WeatherPage,
    SettingsPage,
    AlarmRingPage,
    AlarmSettingMusicPage,
    CouponRedeemPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
