import { Injectable } from '@angular/core';
import { Employees } from '@app/models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employees = new Employees();

  constructor() { }
}
