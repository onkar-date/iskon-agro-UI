import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private scroll: ViewportScroller) {}

  ngOnInit(): void {}

  showProducts(): void {
    this.router.navigate(['products'], { relativeTo: this.activatedRoute });
  }

  scrollToTop(): void {
    this.scroll.scrollToPosition([0,0]);
  }
}
