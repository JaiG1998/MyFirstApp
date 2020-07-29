import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div *ngIf='isValid'>
    <b>You are valid</b>
  </div>

  <div *ngIf='!isValid'>
    <b>You are invalid</b>
  </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  isValid:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
