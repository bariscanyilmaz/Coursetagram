import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { MatDialog } from '@angular/material';
import { FollowDialogComponent } from 'src/app/follow/follow-dialog/follow-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  questions: Question[];
  isFollow:boolean=false;
  sentenceofFollow='Follow';
  

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
  
  follow(){
    this.isFollow=!this.isFollow;
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
