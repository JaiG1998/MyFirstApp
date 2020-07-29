import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee"

@Component({
  selector: 'app-employee',
  template: `
  <table>
  <tr>
    <th>Employee Id</th>
    <th>Employee Name</th>
    <th>Employee Age</th>
    <th>Employee Designation</th>
  </tr>
  <tr *ngFor='let e of emp'>
    <td>{{e.empId}}</td>
    <td>{{e.empName}}</td>
    <td>{{e.empAge}}</td>
    <td>{{e.empDesignation}}</td>
  </tr>
</table>
  `,
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

  employee1 = new Employee(101,"Jack",23,"Trainee");
  employee2 = new Employee(102,"Ben",22,"Trainee");
  employee3 = new Employee(103,"Maria",24,"HR");

  emp:Employee[]=[this.employee1,this.employee2,this.employee3];

  constructor() { }

  ngOnInit(): void {
  }

}
