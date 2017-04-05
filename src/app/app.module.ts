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
import { AlarmSettingLabelPage } from '../pages/alarm-setting-label/alarm-setting-label';
import { CouponRedeemPage } from '../pages/coupon-redeem/coupon-redeem';
// util pages
import { TabsPage } from '../pages/tabs/tabs';

// directives
import { Autofocus } from '../components/autofocus/autofocus';

// providers
import { ConfigData } from '../providers/config-data';
import { IonicStorageModule } from '@ionic/storage';

// native components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { MediaPlugin } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';

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
    AlarmSettingLabelPage,
    CouponRedeemPage,
    TabsPage,
    Autofocus
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    AlarmSettingLabelPage,
    CouponRedeemPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    MediaPlugin,
    Vibration,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigData
  ]
})
export class AppModule { }
