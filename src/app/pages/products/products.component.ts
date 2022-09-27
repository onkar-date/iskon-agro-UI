import { PRODUCTS } from './../../shared/constants/products';
import { IProduct } from './../../shared/interface/product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
