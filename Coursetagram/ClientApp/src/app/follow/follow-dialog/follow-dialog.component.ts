import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-follow-dialog',
  templateUrl: './follow-dialog.component.html',
  styleUrls: ['./follow-dialog.component.css']
})
export class FollowDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FollowDialogComponent>) { }

  ngOnInit() {
    
  }

  close(){
    this.dialogRef.close();
  }

}
