import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  username: string = '';
  users: any[] = [];

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.username = this.userService.username;
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res as any;
    })
  }


}
