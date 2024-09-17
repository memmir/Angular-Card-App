import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  title: string = 'angular-project';

  constructor() {
  }
  ngOnInit() :void {
    this.setTitle();
  }

  setTitle() {
    this.title = 'angular-jobs';
  }


}
