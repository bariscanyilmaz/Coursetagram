import { Component, OnInit } from '@angular/core';
import { IQuestionModel } from 'src/app/models/question.model';
import { FollowDialogComponent } from 'src/app/follow/follow-dialog/follow-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  questions: IQuestionModel[];
  constructor(public dialog: MatDialog) { }

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

  showFollow(){
    
    const dialogRef = this.dialog.open(FollowDialogComponent, {
      width: '250px',
      height:'auto'
    });

  }

  
  showFollower(){
    
    const dialogRef = this.dialog.open(FollowDialogComponent, {
      width: '250px',
      height:'auto'
    });

  }

}
