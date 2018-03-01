//import { FavouritePageModule } from './../favourite/favourite.module';
//import { JobPage } from './../job/job';
//import { MatakuliahPage } from './../matakuliah/matakuliah';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
//import { FavouritePage } from './../favourite/favourite';
//import { HobiPage } from '../hobi/hobi';

//import data  dari data.ts
//import data from '../../data/data';

//import function pop up menggunakan dari ionic-angular
//import function peringatan(alert) menggunakan dari ionic-angular
//import function loading screen menggunakan dari ionic-angular
import { TambahPinjamPage } from '../tambah-pinjam/tambah-pinjam';
import {SQLite,  SQLiteObject} from '@ionic-native/sqlite';
import { EditPinjamPage } from '../edit-pinjam/edit-pinjam';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  //deaklari variabel item tipe any untuk menampung data
  //items:  any;
  //jokes:any;
  listDataPinjaman:any =  [];
  constructor(public NavCtrl: NavController,
     private sqlite:  SQLite,
    public plt:  Platform){
      if(this.plt.is('cordova')){
      }
      else{
        
      }
    }
    //deklarasi variabel items sama dengan data
    //this.jokes  = data;
   // console.log(this.jokes);

    //this.items =  data;
    //debug console  data
    //console.log(this.items);
  //this.storage.set('name','mn');
 // this.storage.get('name').then((val)=>{
   // console.log('Your name is',val);
 // });
 // }


  /*goToCategory(joke){
    this.NavCtrl.push(JokeDetailPage,joke);
  }*/

ionViewDidLoad(){
  this.getData();
}

IonViewWillEnter(){
  this.getData();
}

//function ambil data
  getData() {
    //membuat sqlite
    this.sqlite.create({
      //nama database
      name: 'ionicdb.db',
      //lokasi database
      location: 'default'
    })
    //membuat objec
    .then((db: SQLiteObject) => {
      //querry sql membuat table
      db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, jenis TEXT, penerima TEXT, jumlah TEXT, deskripsi TEXT, tanggalPeminjaman TEXT, tanggalPengembalian TEXT)',{}    )
      //console untuk querry table
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      //query select dari table listDataPeminjaman
      db.executeSql('SELECT * FROM listDataPinjaman ORDER BY rowid DESC', {})
      .then(res => {
        //menammpung array dari variabel listDataPeminjama
        this.listDataPinjaman = [];
        //pengulangan
        for(var i=0; i<res.rows.length; i++) {
          //
          this.listDataPinjaman.push({rowid:res.rows.item(i).rowid, jenis:res.rows.item(i).jenis,  penerima:res.rows.item(i).penerima, jumlah:res.rows.item(i).jumlah,  deskripsi:res.rows.item(i).deskripsi,  tanggalPeminjaman:res.rows.item(i).tanggalPeminjaman, tanggalPengembalian:res.rows.item(i).tanggalPengembalian})
        }
      })
    }).catch(e => console.log(e));
  }

addData(){
  this.NavCtrl.push(TambahPinjamPage);
}
//function ubah data diambil dari rowid yan merupakan primary key
editData(rowid){
  //memunjulkan page editPinjam
  this.NavCtrl.push(EditPinjamPage,{
    //primary key
    rowid:rowid
  });
}

//hapus data diambil dari rowid
hapusData(rowid){
  //untuk koneksi kedatabase
  this.sqlite.create({
    name:  'ionicdb.db',
    location:  'default'
  }).then((db:  SQLiteObject)  =>{
    //querry hapus dari tabel listDataPinjaman
    db.executeSql('DELETE FROM listDataPinjaman WHERE rowid=?',  [rowid])
    .then(res =>{
      console.log(res);
      this.getData();
    })
    .catch(e => console.log(e));
  }).catch(e =>  console.log(e));
}




  /*//fucntion unttuk memmunculkan Feedback Page
  goToFeedback(){
    this.NavCtrl.push(FeedbackPage);
  }
  goToListCard(){
    this.NavCtrl.push(ListCardPage);
  }
    //fucntuin pop up
  presentModal(){
    //memunculkan modal Page
    let  modal =  this.modalCtrl.create(ModalPage);
    modal.present();
  }
   //function funloading
  funLoading(){
    //membuat loader sebagai variabel sama sengan loadCtrl
    let loader = this.loadCtrl.create({
      //isi content
      content: ' now Loading',
      //berapa lama durasi dalam detik
      duration: 5000
    });
    loader.present();
  }
  //deklarasi function alerts
  showConfirm(){
    // deklarasi variabel confirm
    let  confirm   =  this.alertCtrl.create({
      //judul content alert
      title:'use this?',
      //isi content alert
      message:'do you agress to use this function',
      //deklarasi button ada button
      buttons:[
        {
          //isi button 1
          text:'Disagree',
          //ketika dikilik ada debug console
          handler:()=>{
            console.log('What you doing here');
          }
        },
        {
          //isi button 2
          text:'Agree',
          handler:()=>{
            console.log('agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }



}

 // constructor(public navCtrl: NavController) {

  //}
  //function untuk pindah halaman dan memberika value pada variabel yangf sudah diset
 // pindahHalamanFavourite() {
   //mengarahkan ke page FavouritePage
   // this.navCtrl.push(FavouritePage, {
    //memberikan nilai pada variabel
    //  id: "123",
    //name: "Wick"
    //});
   // }
      //function untuk pindah halaman dan memberika value pada variabel yangf sudah diset
    //movePageMatakuliah(){
         //mengarahkan ke page MatakuliahPage
      //this.navCtrl.push(MatakuliahPage,{
      //nim: "3311501039",
     // nama: "Lingga Adi Pratama",
     // matakuliah:  "Pemrograman Berbasis perangkat bergerak"
      //});
   // }
      //function untuk pindah halaman dan memberika value pada variabel yangf sudah diset
    //movePageHobi(){
         //mengarahkan ke page HobiPage
      //this.navCtrl.push(HobiPage,{
            //memberikan nilai pada variabel

        //nim: "3311501039",
       // nama: "Lingga Adi Pratama",
       // hobi: "membaca buku(programming language) dan bersepeda"
         //});
   // }
      //function untuk pindah halaman dan memberika value pada variabel yangf sudah diset
    //movePageJob(){
      //   //mengarahkan ke page JobPage
      //this.navCtrl.push(JobPage,{
            //memberikan nilai pada variabel

        //nim: "3311501039",
        //nama: "Lingga Adi Pratma",
        //job: "Back End Developer"
     // })
   // }*/

}
