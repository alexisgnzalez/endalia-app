import { Injectable } from '@angular/core';
import { Users } from '@app/models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Users = new Users();
  logged: boolean = true;

  constructor(private router: Router) {
  }

  somebodyLogged() {
    this.logged = true;
  }

  signOut() {
    this.logged = false;
    this.router.navigate(['login']);
  }
}
