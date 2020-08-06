import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  template: `
    <html>
      <body>
        <label>TODO: </label>
        <input type="text" placeholder="Shopping" [(ngModel)]=item><br><br>
        <button type="button" (click)='show()'>Add Task</button><br><br>
        <ul *ngFor="let i of todo">
          <li>{{i}}</li>
        </ul>
      </body>
    </html>
  `,
  styles: [
  ]
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item:string=""
  todo:Array<any>=[];
  show(){

    this.todo.push(this.item);     
    
  }

}
