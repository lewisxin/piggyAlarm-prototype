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
import { CouponDetailsPage } from '../pages/coupon-details/coupon-details';
import { CouponDetailsLocationPage } from '../pages/coupon-details-location/coupon-details-location';
import { SettingsNamePage } from '../pages/settings-name/settings-name';
import { SettingsAvatarPage } from '../pages/settings-avatar/settings-avatar';
import { SettingsGenderPage } from '../pages/settings-gender/settings-gender';

// util pages
import { TabsPage } from '../pages/tabs/tabs';

// directives
import { Autofocus } from '../components/autofocus/autofocus';

// providers
import { ConfigData } from '../providers/config-data';
import { WeatherData } from '../providers/weather-data';
import { IonicStorageModule } from '@ionic/storage';

// pipes
import { timePipe } from '../components/time/time';
import { SafeUrlPipe } from '../components/safeUrl/safeUrl';
import { weatherIconPipe } from '../components/weather/icon';
import { temperaturePipe } from '../components/weather/temperature';
import { windDegreePipe } from '../components/weather/wind-degree';

// native components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { MediaPlugin } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';


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
    CouponDetailsPage,
    CouponDetailsLocationPage,
    SettingsNamePage,
    SettingsAvatarPage,
    SettingsGenderPage,
    TabsPage,
    Autofocus,
    timePipe,
    SafeUrlPipe,
    weatherIconPipe,
    temperaturePipe,
    windDegreePipe
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
    CouponDetailsPage,
    CouponDetailsLocationPage,
    SettingsNamePage,
    SettingsAvatarPage,
    SettingsGenderPage,
    TabsPage,
    CouponDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    MediaPlugin,
    Vibration,
    LocalNotifications,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigData,
    WeatherData
  ]
})
export class AppModule { }
