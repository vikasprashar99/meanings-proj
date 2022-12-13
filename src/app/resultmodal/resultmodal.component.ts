import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-resultmodal',
  templateUrl: './resultmodal.component.html',
  styleUrls: ['./resultmodal.component.css']
})
export class ResultmodalComponent implements OnInit {

  score: string | any;
  total: string | any;
  constructor( public dialogRef: MatDialogRef<ResultmodalComponent>,   @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.score)
    console.log(this.data.total)
     this.score = this.data.score;
     this.total = this.data.total;
  }
  

close() {
  console.log("i am inside the close modal")
    this.dialogRef.close();
    
}
}
