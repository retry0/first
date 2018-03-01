import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
    public toast: ToastController) {
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
  this.listDataPinjaman.push(tempData);
  //set data const atau keyyan ke variabel listDataPinjaman
  this.storge.set(KEY_DATA_PINJAMAN,
    JSON.stringify(this.listDataPinjaman));
    //kalau sukses diarahkan ke home
    //variabel untuk toast
    let toast=this.toast.create({
      //pesang jika berhasil disimpan
      message:  'Data Berhasil disimpan',
      duration:  5000
    });
    toast.present();
//akan membuka home page
    this.navCtrl.setRoot(HomePage);
}

}
