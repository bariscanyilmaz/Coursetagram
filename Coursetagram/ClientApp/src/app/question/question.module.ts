import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { MaterialDesignModule } from '../material-design/material-design.module';


@NgModule({
  imports: [
    CommonModule,MaterialDesignModule
  ],
  declarations: [QuestionComponent],
  exports:[QuestionComponent]
})
export class QuestionModule { }
