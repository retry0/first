import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPengeluaranPage } from './list-pengeluaran';

@NgModule({
  declarations: [
    ListPengeluaranPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPengeluaranPage),
  ],
})
export class ListPengeluaranPageModule {}
