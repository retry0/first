import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MatakuliahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matakuliah',
  templateUrl: 'matakuliah.html',
})
export class MatakuliahPage {
  //mendefiniskan tipe data dari variabel
  nim: string;
  nama: string;
  matakuliah: string;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams)
  {
    //menampilkan data hanya berupa console
    console.log(navParams.data);
           //mengambil  data sesuai denga variabel yang telah diset
           this.nim  =  navParams.get('nim');
    this.nama  =  navParams.get('nama');
    this.matakuliah  =navParams.get('matakuliah');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatakuliahPage');
  }

}
