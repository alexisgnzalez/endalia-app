import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';
import { EmployeeService } from '@app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  myList: any = [];

  constructor(
    private userService: UserService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.employeeService.employeeList.data);
    this.myList = this.employeeService.employeeList.data;
  }

  loggingOut() {
    this.userService.signOut();
  }

}
