import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services/user.service';
import { Users } from '@app/models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  buttonDisabled: boolean = true;

  users: Users = new Users();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.required
      ],
      password: [
        '',
        Validators.required
      ]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.buttonDisabled = this.loginForm.invalid;
    });
  }

  ngOnInit(): void {
  }

  checkLogin() {
    console.log(this.loginForm.value);
    this.userService.userList.data.forEach(user => {
      console.log(user);
      if (
        user.username === this.loginForm.value.username &&
        user.password === this.loginForm.value.password
        ) {
        this.userService.somebodyLogged();
        this.router.navigate(['employees']);
      }
    });
  }

}
