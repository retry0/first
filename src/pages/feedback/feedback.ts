import { Component } from '@angular/core';
import { IonicPage,ToastController      } from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  //mendekalrai toast controoler sebagai constructor
  constructor(public toastCtrl:  ToastController) {
  }
  //deklaarsi function
    sendFeedback(){
      //deklarasi taost sama dengan toastCtrl dari constructor dan membuat
      let toast =  this.toastCtrl.create({
        //pensan content
        message:'Thanks for your feedback',
        duration:5000
      });
      //memunculkan
      toast.present();
    }

  }


