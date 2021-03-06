import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
//import { ListCardPage } from '../pages/list-card/list-card';
import { TambahPinjamPage } from '../pages/tambah-pinjam/tambah-pinjam';
import { TambahPengeluaranPage } from '../pages/tambah-pengeluaran/tambah-pengeluaran';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:  Nav;
  rootPage:any = HomePage;
  pages:  Array<{
    title:string,
    component:any,
    icon:string;
  }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages=[
      {title:  'Home',component:HomePage,icon:'home'},
      {title:  'Tambah Pinjaman',component:  TambahPinjamPage,  icon:'md-add-circle'},
      {title:  'Tambah Pengeluaran',component:  TambahPengeluaranPage,  icon:'md-add-circle'}

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

