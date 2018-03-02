import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Storage} from '@ionic/storage';
const KEY_DATA_PINJAMAN = "dataPinjaman";
import {  ToastController } from 'ionic-angular';

/*
  Generated class for the HutangProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HutangProvider {
  public listDataPinjaman:any = [];

  constructor(
            public storage: Storage,
          public toast: ToastController) {
    console.log('Hello HutangProvider Provider');
    this.ambilData();
  }

  ambilData(){
    this.storage.get(KEY_DATA_PINJAMAN).then((data)=>{
      if(data!=null){
        this.listDataPinjaman =  JSON.parse(data);
        console.log(this.listDataPinjaman);
      }
      else{
        this.listDataPinjaman = [];
        console.log('empty');
      }
    })
  }

  hapusData(item){
    var temp = this.listDataPinjaman.index0f(item);
    this.listDataPinjaman.splice(temp, 1);
  }

  hapusSemuaData(){
    this.storage.remove(KEY_DATA_PINJAMAN);
    this.listDataPinjaman = [];
  }

  simpanData(tempData){
    this.listDataPinjaman.push(tempData);
    this.storage.set(KEY_DATA_PINJAMAN,
    JSON.stringify(this.listDataPinjaman));
  }
  notifikasi(){
    let toast=this.toast.create({
      //pesang jika berhasil disimpan
      message:  'Data Berhasil disimpan',
      duration:  5000
    });
    toast.present();
  }

}
