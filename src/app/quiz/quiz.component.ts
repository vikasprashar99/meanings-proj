import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DATA_CONST } from '../data_const';
import { ResultmodalComponent } from '../resultmodal/resultmodal.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(private router: Router,private dialog: MatDialog) {}

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  resArr: any = [];
  tempArr: any = [];

  ngOnInit(): void {
    const arr = DATA_CONST.PDF1;
    arr.forEach((ele: any) => {
      const res = ele.replaceAll(/[0-9.]/g, '');
      const firstRes = res.split(/[A-Z][a-z]/g);
      const newRes = res.split(/[A-Z]+\s/g);
      const obj = {
        key: firstRes[0],
        val: newRes[newRes.length - 1],
        givenAns: '',
      };
      this.resArr.push(obj);
      this.shuffle(this.resArr);
    });

    this.resArr.forEach((element: any) => {
      let randomNumber = Math.floor(Math.random() * this.resArr.length);
      this.tempArr = this.resArr.filter((x: any) => x.val !== element.val);
      const r1 =
        this.tempArr[
          (this.tempArr.length + randomNumber - 1) % this.tempArr.length
        ];
      const r2 =
        this.tempArr[
          (this.tempArr.length + randomNumber) % this.tempArr.length
        ];
      const r3 =
        this.tempArr[
          (this.tempArr.length + randomNumber + 1) % this.tempArr.length
        ];

      const arr = [
        {
          value: element.val,
          class: '',
        },
        {
          value: r1.val,
          class: '',
        },
        {
          value: r2.val,
          class: '',
        },
        {
          value: r3.val,
          class: '',
        },
      ];
      element.options = this.shuffle(arr);
    });
  }

  shuffle(array: any) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  goToDashboard() {
    this.router.navigate(['/']);
  }
  onChangeRadio(event: any, index: number) {
    this.resArr[index].givenAns = event.value;
  }

  onSubmit() {
    let count = 0;
    this.resArr.forEach((element: any) => {
      if (element.givenAns == element.val) {
        count++;
        this.handleOptionCss(element.options, element.val);
      } else {
        this.handleOptionCss(element.options, element.val);
      }
    });
    // alert("You Score" +count+ " out of" +this.resArr.length)
    
    let dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    
  //   dialogConfig.data = {
  //     id: count,
  //     title: this.resArr.length
  // };
      this.dialog.open(ResultmodalComponent, dialogConfig);
      dialogConfig = this.dialog.open(ResultmodalComponent, {
        width: '230px',
        height: '200px',
        data: {
          score: count,
          total: this.resArr.length
        }
      })
  }

  private handleOptionCss(options: [], correctAns: string) {
    options.forEach((op: { value: any; class: string }) => {
      if (op.value === correctAns) {
        op.class = 'c1';
      } else {
        op.class = 'c2';
      }
    });
  }
}
