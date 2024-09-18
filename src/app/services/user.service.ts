import {forwardRef, Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string = 'MahmutKil';
  apiUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(
    private http: HttpClient,
    @Inject(forwardRef(() => UserService)) private userService: UserService

  ) { }

  getUsers(){
    return this.http.get(this.apiUrl + 'users');
    //return this.http.get('https://jsonplaceholder.typicode.com/users'); Buda yapılabilecek bir alternatif
  }

}
