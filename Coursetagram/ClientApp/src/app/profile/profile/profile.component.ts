import { Component, OnInit } from '@angular/core';
import { IQuestionModel } from 'src/app/models/question.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  questions: IQuestionModel[]
  constructor() { }

  ngOnInit() {
    this.questions = [{
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    },
    {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }];
  }

}
