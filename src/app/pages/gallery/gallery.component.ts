import { IMAGE_CATEGORY } from './../../shared/constants/gallery.constants';

import { GALLERY_IMAGES } from './../../shared/constants/gallery.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  CATEGORIES = IMAGE_CATEGORY;
  EVENT_IMAGES = GALLERY_IMAGES.EVENT;
  PLOT_DEVELOPMENT_IMAGES = GALLERY_IMAGES.PLOT_DEVELOPMENT;
  selectedCategory: string = IMAGE_CATEGORY.ALL;
  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    return;
  }

}
