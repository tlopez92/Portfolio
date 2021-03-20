import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  hireMe() {
    this.router.navigate(['/hireMe']);
  }
}
