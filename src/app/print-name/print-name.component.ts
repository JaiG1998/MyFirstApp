import { Component, OnInit } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'app-print-name',
  template: `
    <form (ngSubmit)='show()'>
      User Name: <input [(ngModel)]=user.username name='uname' />
      User Address: <input [(ngModel)]=user.useraddress name='uadd' />
      User Age: <input [(ngModel)]=user.userage name='uage' />
      <button type="submit">Submit</button>
      <!--<img src='{{imagePath}}'/>-->
      <img [src]='imagePath'/>
      <span [innerHTML]='title'></span>
    </form>
  `,
  styles: [
  ]
})
export class PrintNameComponent implements OnInit {

  imagePath='assets/img.PNG';
  title='Hello, How are you?'

  user = new User();

  constructor() { }

  show(){
    console.log(this.user.username+ ' ' +this.user.useraddress+ ' ' + this.user.userage);
  }

  ngOnInit(): void {
    

  }

}
