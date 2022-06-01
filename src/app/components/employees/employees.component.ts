import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  loggingOut() {
    console.log("yes?");
    this.userService.signOut();
  }

}
