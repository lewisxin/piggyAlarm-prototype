import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      storage.ready().then(() => {
        storage.set('songList', this.songList);
      });
    });
  }

  songList = [
    {
      "category": "Funny",
      "label": "Piggy Song",
      "value": "piggy-song",
      "fileName": "piggy-song.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Funny",
      "label": "Baby Wake Up",
      "value": "baby-wake up",
      "fileName": "baby-wake up.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Funny",
      "label": "Morning Kisses",
      "value": "morning-kisses",
      "fileName": "morning-kisses.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Funny",
      "label": "Hurry Up",
      "value": "hurry-up",
      "fileName": "hurry-up.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Funny",
      "label": "I Am Losing You",
      "value": "i-am losing you",
      "fileName": "i-am losing you.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Funny",
      "label": "Earthquake",
      "value": "earthquake",
      "fileName": "earthquake.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Nature",
      "label": "Sunrise",
      "value": "sunrise",
      "fileName": "sunrise.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Nature",
      "label": "Birds Singing",
      "value": "birds-singing",
      "fileName": "birds-singing.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Nature",
      "label": "Tornado",
      "value": "tornado",
      "fileName": "tornado.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Nature",
      "label": "Jungle Adventure",
      "value": "jungle-adventure",
      "fileName": "jungle-adventure.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Nature",
      "label": "Mounain Top",
      "value": "mounain-top",
      "fileName": "mounain-top.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Nature",
      "label": "Ocean",
      "value": "ocean",
      "fileName": "ocean.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Electronic",
      "label": "Windows XP",
      "value": "windows-xp",
      "fileName": "windows-xp.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Electronic",
      "label": "Dancing Robot",
      "value": "dancing-robot",
      "fileName": "dancing-robot.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Electronic",
      "label": "White Noise",
      "value": "white-noise",
      "fileName": "white-noise.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Electronic",
      "label": "Future",
      "value": "future",
      "fileName": "future.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Electronic",
      "label": "Buzzing",
      "value": "buzzing",
      "fileName": "buzzing.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "Hugh Jackman",
      "value": "hugh-jackman",
      "fileName": "hugh-jackman.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "Adele",
      "value": "adele",
      "fileName": "adele.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "Lady Gaga",
      "value": "lady-gaga",
      "fileName": "lady-gaga.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "Stefaine Sun",
      "value": "stefaine-sun",
      "fileName": "stefaine-sun.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "JJ Lin",
      "value": "jj-lin",
      "fileName": "jj-lin.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "Jay Chou",
      "value": "jay-chou",
      "fileName": "jay-chou.mp3",
      "filePath": "assets/songs/"
    },
    {
      "category": "Celebrity",
      "label": "Wang Kai",
      "value": "wang-kai",
      "fileName": "wang-kai.mp3",
      "filePath": "assets/songs/"
    }
  ]
}
