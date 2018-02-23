import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {
      //mendefiniskan tipe data dari variabel
  nim: String;
  nama: String;
  job: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
                //menampilkan data hanya berupa console
      console.log(navParams.data);
           //mengambil  data sesuai denga variabel yang telah diset
           this.nim =  navParams.get('nim');
      this.nama=  navParams.get('nama');
      this.job  =  navParams.get('job');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPage');
  }

}
