import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import data2 dan mendeklarasikan sebgai data2
import data from '../../data/data2';
import data2 from '../../data/data2';
/**
 * Generated class for the ListCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-card',
  templateUrl: 'list-card.html',
})
export class ListCardPage {
  //deklarasi data_2 dan bertipe any
  data_2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    //data2 sama dengan yang diimport
this.data_2 = data2;
//debug console untuk data2
console.log(this.data_2);
  }


}
