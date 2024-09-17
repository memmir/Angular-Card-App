import { Component } from '@angular/core';
import {ContentListComponent} from "../../content/content-list/content-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
