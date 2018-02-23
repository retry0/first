import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JokeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joke-detail',
  templateUrl: 'joke-detail.html',
})
export class JokeDetailPage {
  jokes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.jokes = this.navParams.data;
  console.log(this.jokes);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad JokeDetailPage');
  }

}
