import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahPengeluaranPage } from './tambah-pengeluaran';

@NgModule({
  declarations: [
    TambahPengeluaranPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahPengeluaranPage),
  ],
})
export class TambahPengeluaranPageModule {}
