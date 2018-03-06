//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import storage untuk simpan data dilocal
import{Storage} from '@ionic/storage';
//deklarasi varibel data pinjaman
const KEY_DATA_PINJAMAN = "dataPinjaman";
//import toast untuk memunculkan toast tambah pinjaman
import {  ToastController } from 'ionic-angular';

/*
  Generated class for the HutangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HutangProvider {
  //deklarasi variabel penampung data pinjaman dengan type any
  public listDataPinjaman:any = [];

  constructor(
    //deklarasi storage sama dengan yang diimport
            public storage: Storage,
                //deklarasi toast sama dengan yang diimport
          public toast: ToastController) {
    console.log('Hello HutangProvider Provider');
    //ambil data dari function yang sudah didefinisikan
    this.ambilData();
  }

  //deklarasi function ambil data
  ambilData(){
    //data storage diambil dari data key_data_pinjaman sama dengan data
    this.storage.get(KEY_DATA_PINJAMAN).then((data)=>{
      //jika data null
      if(data!=null){
        //diambil dari penampung(array) data sama dengan json dari variabel data diatas
        this.listDataPinjaman =  JSON.parse(data);
        //menamppilkan consolenya
        console.log(this.listDataPinjaman);
      }
      else{
        //jika penampung data kosong atau tidak ada data sama sekali
        this.listDataPinjaman = [];
        //meanampilkan tulisan empty
        console.log('empty');
      }
    })
  }

  //deklarasi function hapus data dengan variabel item
  hapusData(item){
    //deklarai variabel temp sama dengan listDataPinjaman
    var temp = this.listDataPinjaman.indexOf(item);
    //akan mengaapsu satu array saja
    this.listDataPinjaman.splice(temp, 1);
  }
  //dekarlsi function hapus semu data
  hapusSemuaData(){
    //menghapus semua data yang dikey
    this.storage.remove(KEY_DATA_PINJAMAN);
    this.listDataPinjaman = [];
  }
  //dkelarasi function simpan data untuk tambah pinjaman
  simpanData(tempData){
    //data yang dari variabel tempdata akan ditambahke variabel lsitDatapinjaman
    this.listDataPinjaman.push(tempData);
    this.storage.set(KEY_DATA_PINJAMAN,
    JSON.stringify(this.listDataPinjaman));
  }
  //deklarasi function notifikasi untuk tambah data jika berhasil
  notifikasi(){
    let toast=this.toast.create({
      //pesang jika berhasil disimpan
      message:  'Data Berhasil disimpan',
      duration:  5000
    });
    toast.present();
  }

}
