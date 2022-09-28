import { SCREENS } from './../../shared/constants/screen-constants';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  screens = SCREENS;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  showProducts(): void {
    this.router.navigate(['products'], { relativeTo: this.activatedRoute });
  }

  goToScreen(screen: SCREENS): void {
    if (screen === SCREENS.PRODUCTS) {
      this.router.navigate(['home/products']);
    } else if (screen === SCREENS.CONTACT_US) {
      return;
      this.router.navigate(['home/contact-us']);
    }
    this.sidenav.close();
  }
}
