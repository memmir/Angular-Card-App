import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  username: string = '';

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.username = this.userService.username;
  }

}
