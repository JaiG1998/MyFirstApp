import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    
      <button (click)='show()'>Click here</button>
      <p>Your Counter is : {{counter}}</p>
    
  `,
  styles: ['p{font-weight:bold;font-size:40px;font-family:arial}'
]
})
export class CounterComponent implements OnInit {


  counter:number=101;

  show(){
    this.counter++;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
