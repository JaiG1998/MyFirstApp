import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from "./firstcom";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { CounterComponent } from './counter/counter.component';
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { EmployeeComponent } from './employee/employee.component';
import { GreetingComponent } from './greeting/greeting.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    CounterComponent,
    HelloName,
    PrintNameComponent,
    DirectivecompComponent,
    EmployeeComponent,
    GreetingComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
