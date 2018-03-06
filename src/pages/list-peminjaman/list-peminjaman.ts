//import storage untuk localstorage
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import provider hutang yang berfungsi sebagai model
import { HutangProvider } from '../../providers/hutang/hutang';
//import tambahpage
import { TambahPinjamPage } from '../tambah-pinjam/tambah-pinjam';
//deklarasi varibel data pinjaman
const KEY_DATA_PINJAMAN = "dataPinjaman";
/**
 * Generated class for the ListPeminjamanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-peminjaman',
  templateUrl: 'list-peminjaman.html',
})
export class ListPeminjamanPage {
    //deklarasi variabel penampung data pinjaman dengan type any
  public listDataPinjaman: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    //deklarasi storage sama dengan yang diimport
    private storage: Storage,
    //deklarsi hutang yang diambil dari import hutangProvider diatas
    public hutang:  HutangProvider) {
      setTimeout(()=>{
        this.listDataPinjaman = this.hutang.listDataPinjaman;
      },1000);
   this.storage.get(this.listDataPinjaman).then((e)=>{
     console.log(e);
   });
  }

  ambilDataPinjaman(){
    this.storage.get(KEY_DATA_PINJAMAN).then((data)=>{
      if(data !=null){
        this.listDataPinjaman  =  JSON.parse(data);
        console.log(this.listDataPinjaman);
      }
      else{
        this.listDataPinjaman  =[];
        console.log('empty');
      }
    })
  }
  //function hapus  data pinjaman dengan object item
  hapusDataPinjaman(item) {
    //ambil function hapusData dari provider hutang dengan object item
    this.hutang.hapusData(item);
    }
      //function hapus  data dengan object item
    hapusData(item) {
      //deklarasi variabel temp untuk penyimpan sementara sama daengan variabel listDataPeminjaman dengan object item
      var temp = this.listDataPinjaman.index0f(item);
        this.listDataPinjaman.splice(temp,1);
        this.storage.set(KEY_DATA_PINJAMAN,
        JSON.stringify(this.listDataPinjaman));
         }
     //function hapus semua data pinjaman
    hapusSemuaDataPinjaman(){
      //diambil dari function hapusSemuaData dari provider hutang
        this.hutang.hapusSemuaData();
        //penampung data
        this.listDataPinjaman = [];
    }
//untuk memunculkan page tambah pinjaman
    tambahPinjaman(){
      this.navCtrl.push(TambahPinjamPage);
    }

}
