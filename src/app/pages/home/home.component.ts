import { SCREENS } from './../../shared/constants/screen-constants';
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

  screens = SCREENS;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scroll: ViewportScroller
  ) {}

  ngOnInit(): void {}

  showProducts(): void {
    this.router.navigate(['products'], { relativeTo: this.activatedRoute });
  }

  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }

  goToScreen(screen: SCREENS): void {
    if (screen === SCREENS.PRODUCTS) {
      this.router.navigate(['home/products']);
    } else {

    }
    this.sidenav.close();
  }
}
