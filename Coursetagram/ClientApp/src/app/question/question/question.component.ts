import { Component, OnInit, Input } from '@angular/core';
import { IQuestionModel } from 'src/app/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questions:IQuestionModel[];

  constructor() {

   }

  ngOnInit() {
  }


}
