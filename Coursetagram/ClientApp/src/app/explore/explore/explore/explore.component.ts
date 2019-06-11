import { Component, OnInit } from '@angular/core';
import { IQuestionModel } from 'src/app/models/question.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  questions: IQuestionModel[];
  constructor() { }

  ngOnInit() {
    this.questions = [{
      id: 0, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 1, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 2, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 3, answer: 'A', imagePath: 'http://lorempixel.com/400/200/', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 4, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 5, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 6, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }, {
      id: 7, answer: 'A', imagePath: 'http://lorempixel.com/output/food-q-c-400-400-5.jpg', lecture: 'Matematik', object: 'Polinom'
    }];
  }

}
