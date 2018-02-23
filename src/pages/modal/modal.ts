//import { FavouritePage } from './../favourite/favourite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import data from '../../data/data';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  dummys:   any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public  modalCtrl:  ModalController) {
  this.dummys  =  data;
  console.log(this.dummys);
  }

  presentModal(){
    let  modal =  this.modalCtrl.create(ModalPage);
    modal.present();
  }3

}
