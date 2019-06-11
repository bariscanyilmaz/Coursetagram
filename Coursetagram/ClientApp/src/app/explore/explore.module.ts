import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore/explore.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  imports: [
    CommonModule,QuestionModule
  ],
  declarations: [ExploreComponent]
})
export class ExploreModule { }
