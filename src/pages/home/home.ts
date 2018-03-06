//import page listpengeluaran
import { ListPengeluaranPage } from './../list-pengeluaran/list-pengeluaran';
//import { FavouritePageModule } from './../favourite/favourite.module';
//import { JobPage } from './../job/job';
//import { MatakuliahPage } from './../matakuliah/matakuliah';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { FavouritePage } from './../favourite/favourite';
//import { HobiPage } from '../hobi/hobi';

//import data  dari data.ts
//import data from '../../data/data';
//import data from '../../data/data-jokes';

//import { FeedbackPage } from '../feedback/feedback';
//import function pop up menggunakan dari ionic-angular
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
//import function peringatan(alert) menggunakan dari ionic-angular
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
//import function loading screen menggunakan dari ionic-angular
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
//import { JokeDetailPage } from '../joke-detail/joke-detail';
//import listpeminjaman
import { ListPeminjamanPage } from '../list-peminjaman/list-peminjaman';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //deaklari variabel item tipe any untuk menampung data
  //items:  any;
  //jokes:any;
  constructor(public NavCtrl: NavController,
    public  modalCtrl:  ModalController,public alertCtrl:  AlertController, public loadCtrl: LoadingController,
  ){
  }
//untuk memunculkan page list peminjaman
  listPeminjaman(){
    this.NavCtrl.push(ListPeminjamanPage);
  }
  //untuk memunculkan page list pengeluaran
  listPengeluaran(){
    this.NavCtrl.push(ListPengeluaranPage);
  }
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

