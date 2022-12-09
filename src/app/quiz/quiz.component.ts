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

  getRandomItem(ra: string | any[]) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * ra.length);

    // get random item
    const item = ra[randomIndex];

    return item;
  }

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
      this.shuffle(this.resArr)
    });

    this.resArr.forEach((element: any) => {
      const r1 = this.getRandomItem(this.resArr);
      const r2 = this.getRandomItem(this.resArr);
      const r3 = this.getRandomItem(this.resArr);
      const arr = [element.val, r1.val, r2.val, r3.val];
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
}
