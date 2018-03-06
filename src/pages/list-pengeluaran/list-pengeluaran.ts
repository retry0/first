import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import provider pengeluaran yang berfungsi sebagai model
import { PengeluaranProvider } from '../../providers/pengeluaran/pengeluaran';
//import storage untuk localstorage
import { Storage } from '@ionic/storage';
//import page tambah pengeluaran
import { TambahPengeluaranPage } from '../tambah-pengeluaran/tambah-pengeluaran';
//deklarasi varibel data pengeluaran
const KEY_DATA_PENGELUARAN = "dataPengeluaran";
/**
 * Generated class for the ListPengeluaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-pengeluaran',
  templateUrl: 'list-pengeluaran.html',
})
export class ListPengeluaranPage {
      //deklarasi variabel penampung data pengeluaran dengan type any
  public listDataPengeluaran: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    //deklarsi hutang yang diambil dari import pengeluaranProvider diatas
    public pengeluaran:  PengeluaranProvider,
        //deklarasi storage sama dengan yang diimport
    private storage: Storage) {

      setTimeout(()=>{
        this.listDataPengeluaran = this.pengeluaran.listDataPengeluaran
      },1000 );

      this.storage.get(this.listDataPengeluaran).then((f)=>{
        console.log(f);
      });
  }
  //function hapus  data pengeluaran dengan object peng
  hapusDataPengeluaran(peng){
    this.pengeluaran.hapusData(peng);
  }
      //function hapus  data dengan object pemg
  hapusDataPeng(peng){
    var  temp = this.listDataPengeluaran.index0f(peng);
    this.listDataPengeluaran.splice(temp,1);
    this.listDataPengeluaran.set(KEY_DATA_PENGELUARAN,
    JSON.stringify(this.listDataPengeluaran));
  }
       //function hapus semua data pengeluaran
  hapusSemuaDataPengeluaran(){
          //diambil dari function hapusSemuaData dari provider pengeluaran
    this.pengeluaran.hapusSemuaData();
    this.listDataPengeluaran = [];
  }
//untuk memunculkan page tambah pengeluaran
tambahPengeluaran(){
    this.navCtrl.push(TambahPengeluaranPage);
  }

}
