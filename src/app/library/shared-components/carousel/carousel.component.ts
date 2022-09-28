import { CAROUSEL_IMAGES } from './../../../shared/constants/carousel.constants';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = CAROUSEL_IMAGES;
  constructor(private ngbCarouselConfig: NgbCarouselConfig) {
    // ngbCarouselConfig.interval = 3000;
  }

  ngOnInit(): void {}
}
