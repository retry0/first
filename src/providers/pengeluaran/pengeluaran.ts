import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
const KEY_DATA_PENGELUARAN= "dataPengeluaran";
/*
  Generated class for the PengeluaranProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PengeluaranProvider {
  public listDataPengeluaran = [];
  constructor(private storage: Storage,
              private toast: ToastController) {
    console.log('Hello PengeluaranProvider Provider');
  }

  ambilData(){
    this.storage.get(KEY_DATA_PENGELUARAN).then((data)=>{
      if(data!=null){
        this.listDataPengeluaran = JSON.parse(data);
        console.log(this.listDataPengeluaran);
      }
      else{
        this.listDataPengeluaran = [];
        console.log('empty');
      }
    })
  }

  hapusData(peng){
    var temp = this.listDataPengeluaran.indexOf(peng);
    this.listDataPengeluaran.splice(temp, 1);
  }

  hapusSemuaData(){
    this.storage.remove(KEY_DATA_PENGELUARAN);
    this.listDataPengeluaran = [];
  }

  simpanData(tempData){
    this.listDataPengeluaran.push(tempData);
    this.storage.set(KEY_DATA_PENGELUARAN,
    JSON.stringify(this.listDataPengeluaran));
  }
  notifikasi(){
    let toast=this.toast.create({
      //pesang jika berhasil disimpan
      message:  'Data Berhasil disimpan pengeluaran',
      duration:  5000
    });
    toast.present();
  }

}
