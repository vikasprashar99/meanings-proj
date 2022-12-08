import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private router:Router) { }

  goToTest() {
      console.log("inside func")
      this.router.navigate(["quiztest"])
  }
}
