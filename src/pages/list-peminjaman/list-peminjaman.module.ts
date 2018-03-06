import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPeminjamanPage } from './list-peminjaman';

@NgModule({
  declarations: [
    ListPeminjamanPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPeminjamanPage),
  ],
})
export class ListPeminjamanPageModule {}
