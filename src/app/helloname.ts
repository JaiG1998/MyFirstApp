import { Component } from "@angular/core";


@Component({
    selector: 'hello-name',
    template:`
    <form>
        Enter your Name: <input [(ngModel)]=username name='nm'/>
        <button type='submit'>Submit</button>
        <p>Hello {{username}}</p>
    </form>`,
    styles:[]

})

export class HelloName{
    username:string="";
}