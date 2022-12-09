import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA_CONST } from '../data_const';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(private router: Router) {}

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  resArr: any = [];

  ngOnInit(): void {
    const arr = DATA_CONST.PDF1;
    arr.forEach((ele: any) => {
      const res = ele.replaceAll(/[0-9.]/g, '');
      const firstRes = res.split(/[A-Z][a-z]/g);
      const newRes = res.split(/[A-Z]+\s/g);
      const obj = {
        key: firstRes[0],
        val: newRes[newRes.length - 1],
      };
      this.resArr.push(obj);
    });
  }

  goToDashboard() {
    this.router.navigate(['/']);
  }
}
