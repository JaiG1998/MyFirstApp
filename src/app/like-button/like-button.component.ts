import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  template: `

  <html>
    <body>
      <button class='like-button' (click)='onClick()'><span class='likes-counter'>Like | {{counter}}</span></button>
    </body>
  </html>
    
  `,
  styles: [`
    .like-button{
      padding: 10px 20px;
      font-size: 20px;
      
    }

    .likes-counter{
      color: #0EBFE9;

    }

  `
  ]
})
export class LikeButtonComponent implements OnInit {

  click:boolean;
  constructor() { 
    this.click=false;

  }

  ngOnInit(): void {
  }

  counter:number=100;
  onClick(){
    if(this.click==false){
      this.counter++;
      this.click=true;

    }else{
      this.counter--;
      this.click=false;
    }
    
  }

}
