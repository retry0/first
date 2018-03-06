import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PengeluaranProvider } from '../../providers/pengeluaran/pengeluaran';
import { HomePage } from '../home/home';


/**
 * Generated class for the TambahPengeluaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambah-pengeluaran',
  templateUrl: 'tambah-pengeluaran.html',
})
export class TambahPengeluaranPage {
    //deklarsi varibel data untuk form tambah pengeluaran
  jenisPeng:  any = null;
  pengelu:any = null;
  jumlah:any =null;
  deskripsi:any = null;
  tanggalPengeluaran:any = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pengeluaran:  PengeluaranProvider) {
  }
//function simpan data
  simpanData(){
    var tempData = {
      jenisPeng: this.jenisPeng,
      penglu:  this.pengelu,
      jumlah:  this.jumlah,
      deskripsi:  this.deskripsi,
      tanggalPengeluaran:  this.tanggalPengeluaran
    }

    this.pengeluaran.simpanData(tempData);
    this.pengeluaran.notifikasi();
    this.navCtrl.setRoot(HomePage);
  }
}
