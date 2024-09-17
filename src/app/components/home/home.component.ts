import {Component, OnInit} from '@angular/core';
import {ContentListComponent} from "../../content/content-list/content-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {HighlightDirective} from "../../directives/highlight.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentListComponent,
    NgForOf,
    NgIf,
    HighlightDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  users: string[] = [];
  users1: { name:string; age: number}[] = []

  constructor() {}

  ngOnInit(): void {

    this.users = ['emir', 'mahmut'];


    this.users1 = [
      {
        name: 'mahmut',
        age: 25
      },
      {
        name: 'emir',
        age: 20
      }
    ];
  }
}
