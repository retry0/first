import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HutangProvider } from '../../providers/hutang/hutang';
import { HomePage } from '../home/home';
const  KEY_DATA_PINJAMAN ="dataPinjaman";
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
  public listDataPinjaman: any;
  jenis:any=null;
  penerima:any=null;
  jumlah:any=null;
  deskripsi:any=null;
  tanggalPeminjaman:any=null;
  tanggalPengembalian:any=null;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private storge:  Storage,
    public toast: ToastController,
    public hutang: HutangProvider) {
      this.ambilDataPinjaman();
  }
ambilDataPinjaman(){
  this.storge.get(KEY_DATA_PINJAMAN).then((data)=>{
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
//function simpan data
simpanData(){
  //variabel yang akan memanmpung data pada function ini
  var tempData  =  {
    //nama kolom ditable
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
