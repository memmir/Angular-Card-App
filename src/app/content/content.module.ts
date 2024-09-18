import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentListComponent} from "./content-list/content-list.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  exports: [
    ContentListComponent,
  ],
  imports: [
    CommonModule,
    ContentListComponent,
    HttpClientModule,
  ]
})
export class ContentModule { }
