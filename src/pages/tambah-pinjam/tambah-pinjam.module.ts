import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahPinjamPage } from './tambah-pinjam';

@NgModule({
  declarations: [
    TambahPinjamPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahPinjamPage),
  ],
})
export class TambahPinjamPageModule {}
