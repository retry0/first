import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

//import provider hutang yang berfungsi sebagai model
import { HutangProvider } from '../../providers/hutang/hutang';
import { HomePage } from '../home/home';
/**
 * Generated class for the TambahPinjamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambah-pinjam',
  templateUrl: 'tambah-pinjam.html',
})
export class TambahPinjamPage {
  //deklarsi varibel data untuk form tambah pinjaman
  jenis:any=null;
  penerima:any=null;
  jumlah:any=null;
  deskripsi:any=null;
  tanggalPeminjaman:any=null;
  tanggalPengembalian:any=null;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public toast: ToastController,
        //deklarsi hutang yang diambil dari import hutangProvider diatas
    public hutang: HutangProvider) {
  }


//function simpan data
simpanData(){
  //variabel yang akan memanmpung data pada function ini
  var tempData  =  {
    //nama  variabel yang sudah didefinisikan diatas
    jenis:this.jenis,
    penerima:this.penerima,
    jumlah:this.jumlah,
    deskripsi:this.deskripsi,
    tanggalPeminjaman:this.tanggalPeminjaman,
    tanggalPengembalian:this.tanggalPengembalian
  }
  //data dari varibel function ini kemudian akan dikirim ke variabel globalnya
  this.hutang.simpanData(tempData);
  this.hutang.notifikasi();
  this.navCtrl.setRoot(HomePage)
}

}
