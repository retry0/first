import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public  loadingCtrl:  LoadingController) {
  }

  
}
