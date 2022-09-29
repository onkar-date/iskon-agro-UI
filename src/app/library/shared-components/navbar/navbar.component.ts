import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SCREENS } from 'src/app/shared/constants/screen-constants';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  username: string | undefined;
  screens = SCREENS;
  @Output() openSidenavEvent = new EventEmitter<void>();
  @Output() closeSidenavEvent = new EventEmitter<void>();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  showProducts(): void {
    this.router.navigate(['products'], { relativeTo: this.activatedRoute });
  }

  goToScreen(screen: SCREENS): void {
    if (screen === SCREENS.PRODUCTS) {
      this.router.navigate(['home/products']);
    } else if (screen === SCREENS.CONTACT_US) {
      this.router.navigate(['home/contact-us']);
    } else if (screen === SCREENS.ABOUT_US) {
      this.router.navigate(['home/about-us']);
    }
    this.closeSidenav();
  }

  openSidenav(): void {
    this.openSidenavEvent.emit();
  }

  closeSidenav(): void {
    this.closeSidenavEvent.emit();
  }
}
