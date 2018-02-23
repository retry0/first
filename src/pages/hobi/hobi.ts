import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HobiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hobi',
  templateUrl: 'hobi.html',
})
export class HobiPage {
  /*  //mendefiniskan tipe data dari variabel week 4

  nim: string;
  nama: string;
  hobi: string;*/
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {


    }
          //menampilkan data hanya berupa console
     /* console.log(navParams.data);  week 4
           //mengambil  data sesuai denga variabel yang telah diset
           this.nim  =  navParams.get('nim');
      this.nama  =  navParams.get('nama');
      this.hobi  =  navParams.get('hobi');*/




}
