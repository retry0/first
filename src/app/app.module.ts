//import { FeedbackPage } from './../pages/feedback/feedback';
//import { JobPage } from './../pages/job/job';

//import { MatakuliahPage } from './../pages/matakuliah/matakuliah';
import { FavouritePage } from '../pages/favourite/favourite';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { HobiPage } from '../pages/hobi/hobi';
//import { LoadingPage } from '../pages/loading/loading';
//import { ModalPage } from '../pages/modal/modal';
//import { ListCardPage } from '../pages/list-card/list-card';
//import { JokeDetailPage } from '../pages/joke-detail/joke-detail';
import{IonicStorageModule} from '@ionic/storage';
import { TambahPinjamPage } from '../pages/tambah-pinjam/tambah-pinjam';
import { HutangProvider } from '../providers/hutang/hutang';

@NgModule({
  declarations: [
    //mendeklarsikan page yang dibuat
    MyApp,
    HomePage,
    TambahPinjamPage
    //FavouritePage,
    //MatakuliahPage,
    //HobiPage,
    //JobPage,
    //FeedbackPage,
    //LoadingPage,
  //  ModalPage,
    //ListCardPage,
    //JokeDetailPage,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //mendeklariskan component
    MyApp,
    HomePage,
    TambahPinjamPage
    //FavouritePage,
    //MatakuliahPage,
    //HobiPage,
    //JobPage,
    //FeedbackPage,
   // LoadingPage,
   // ModalPage,
   // ListCardPage,
  //  JokeDetailPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HutangProvider
  ]
})
export class AppModule {}
