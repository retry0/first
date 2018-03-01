import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import{Toast} from '@ionic-native/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the EditPinjamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-pinjam',
  templateUrl: 'edit-pinjam.html',
})
export class EditPinjamPage {
  data = { rowid:0,
     jenis:"",
     penerima:"",
    jumlah:"",
    deskripsi:"",
    tanggalPeminjaman:"",
    tanggalPengembalian:""};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private  toast:Toast) {
      this.getCurrentData(navParams.get("rowid"));
  }

getCurrentData(rowid){
  this.sqlite.create({
    name:  'ionicdb.db',
    location:  'default'
  }).then((db:  SQLiteObject) =>{
    db.executeSql('SELECT * FROM listDataPeminjaman WHERE rowid?',
    [rowid])
    .then(res=>{
      if(res.rows.length>0){
        this.data.rowid  =  res.rows.item(0).rowid;
        this.data.jenis  =  res.rows.item(0).jenis;
        this.data.penerima=  res.rows.item(0).penerima;
        this.data.jumlah  =  res.rows.item(0).jumlah;
        this.data.deskripsi  =  res.rows.item(0).deskripsi;
        this.data.tanggalPeminjaman  =  res.rows.item(0).tanggalPengembalian;
      }
    })
    .catch(e=>{
      console.log(e);
      this.toast.show(e,'5000','center').subscribe(
        toast=>{
          console.log(toast);
        }
      );
    });
  })
  .catch(e=>{
    this.toast.show(e,'5000','center').subscribe(
      toast=>{
        console.log(toast);
      }
    );
  });
}

//function update data ke sqlite
updateData(){
  //membuat sqlite
  this.sqlite.create({
    //nama database
    name: 'ionicdb.db',
    //lokasi database
    location:  'default'
  }).then((db:  SQLiteObject)=>{
    //query sqlite untu update
    db.executeSql('UPDATE listDataPeminjaman SET jenis=?,penerima=?,jumlah=?,deskripsi=?,tanggalPeminjaman=?,tanggalPengembalian=? WHERE rowid=?',
    [this.data.jenis,this.data.penerima,this.data.jumlah,this.data.deskripsi,this.data.tanggalPeminjaman,this.data.tanggalPengembalian,this.data.rowid])
    .then(res=>{
      console.log(res);
      this.toast.show('Data Berhasil diUpdate','5000','center').subscribe(
        toast=>{
          this.navCtrl.popToRoot();
        }
      );
    })
    .catch(e=>{
      console.log(e)
      this.toast.show(e,'5000','center').subscribe(
        toast=>{
          console.log(toast);
        }
      );
    });
  })
}


}
