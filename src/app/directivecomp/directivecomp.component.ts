import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  template: `
    <input type="radio"  name="rb" (click)=show(true)/> Valid
    <input type="radio"  name="rb" (click)=show(false)/> Invalid

    <div *ngIf='isValid'>
      <b>You are valid</b>
    </div>

    <div *ngIf='!isValid'>
      <b>You are invalid</b>
    </div>

    <div *ngFor='let c of cities'>
      <p>
        {{c}}
      </p>
    
    </div>
  `,
  styles: [
  ]
})
export class DirectivecompComponent implements OnInit {
  
  isValid:boolean=false;
  
  show(value){

    this.isValid=value;
  

  }

  cities:any[]=["Mumbai","Rajasthan","Goa","Delhi"];


  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
