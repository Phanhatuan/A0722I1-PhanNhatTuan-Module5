import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {FormsModule} from "@angular/forms";
import {CalculatorComponent} from "./calculator/calculator.component";
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CalculatorComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
