import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Toast} from  '@ionic-native/toast';
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
  data = { jenis:"",
  penerima:"",
    jumlah:"",
    deskripsi:"",
    tanggalPeminjaman:"",
    tanggalPengembalian:""};
 /* public listDataPinjaman: any;
  jenis:any=null;
  penerima:any=null;
  jumlah:any=null;
  deskripsi:any=null;
  tanggalPeminjaman:any=null;
  tanggalPengembalian:any=null;*/


  constructor(public navCtrl: NavController,
   public navParams: NavParams,
    private sqlite:  SQLite,
    private toast: Toast,
    public plt: Platform){
      if(this.plt.is('cordova')){
      }
      else{

      }
    }

  simpanData(){
    this.sqlite.create({
      name:  'ionicdb.db',
      location:  'default'
    }).then((db:  SQLiteObject)=>{
      db.executeSql('INSERT INTO listDataPeminjaman VALUES(NULL,?,?,?,?,?,?)',
      [this.data.jenis,this.data.penerima,  this.data.jumlah,  this.data.deskripsi,  this.data.tanggalPeminjaman,  this.data.tanggalPengembalian])
      .then(res=>{
        console.log(res);
        this.toast.show('Data Berhasil diSimpan',  '5000',  'center').subscribe(
          toast=>{
            this.navCtrl.popToRoot();
          }
        );
      })
      .catch(e=>{
        console.log(e);
        this.toast.show(e,  '5000',  'center').subscribe(
          toast=>{
            console.log(toast);
          }
        );
      });
    }).catch(e=>{
      console.log(e);
      this.toast.show(e,  '5000','center').subscribe(
        toast=>{
          console.log(toast);
        }
      );
    });
  }



/*ambilDataPinjaman(){
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

simpanData(){
  var tempData  =  {
    jenis:this.jenis,
    penerima:this.penerima,
    jumlah:this.jumlah,
    deskripsi:this.deskripsi,
    tanggalPeminjaman:this.tanggalPeminjaman,
    tanggalPengembalian:this.tanggalPengembalian
  }
  this.listDataPinjaman.push(tempData);
  this.storge.set(KEY_DATA_PINJAMAN,
    JSON.stringify(this.listDataPinjaman));
    this.navCtrl.setRoot(HomePage);
}*/

}
