import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA_CONST } from '../data_const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}

  goToTest(pdfName: string) {
    if (pdfName === 'PDF1') {
      this.router.navigate(['quiztest/PDF1']);
    } else if (pdfName === 'PDF2') {
      this.router.navigate(['quiztest/PDF2']);
    }
  }
}
