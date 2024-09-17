import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentListComponent} from "./content-list/content-list.component";



@NgModule({
  declarations: [],
  exports: [
    ContentListComponent,
  ],
  imports: [
    CommonModule,
    ContentListComponent
  ]
})
export class ContentModule { }
