import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
