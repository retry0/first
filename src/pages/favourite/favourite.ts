import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',

})
export class FavouritePage {
    //mendefiniskan tipe data dari variabel
  id : string;
  name: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
     {
                 //menampilkan data hanya berupa console
       console.log(navParams.data);
           //mengambil  data sesuai denga variabel yang telah diset
       this.id   =  navParams.get('id');
       this.name =  navParams.get('name');
  }

  ionViewIDLoad(){
    console.log('ionViewIDLoad FavouritePage');
    }

}
