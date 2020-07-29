import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-greeting',
  template: `
  <form>
    Enter your Name: <input [(ngModel)]=name name='nm'/>
    <button type='submit' (click)='show()'>Submit</button>
    <p>{{value}} {{name}}</p>
  </form>
  `,
  styles: [
  ]
})
export class GreetingComponent implements OnInit {

  name:string="";
  value:string="";
  greeting = ["Hello", "Hi", "Namaste", "Salaam", "Bonjour"];
 
  show(){

    this.value=this.greeting[Math.floor(Math.random() * this.greeting.length)];

  }

  constructor() { }

  ngOnInit(): void {
  }

}
