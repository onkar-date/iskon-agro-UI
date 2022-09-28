import { PRODUCTS, PRODUCT_TYPES } from './../../shared/constants/products';
import { IProduct } from './../../shared/interface/product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = PRODUCTS;
  productTypes = PRODUCT_TYPES;
  selectedProductType: string = this.productTypes.ALL;
  constructor() {}

  ngOnInit(): void {}

  productTypeSelected(): void {
    if (this.selectedProductType === PRODUCT_TYPES.ALL) {
      this.products = PRODUCTS;
    } else {
      this.products = PRODUCTS.filter((product) => {
        return product.category === this.selectedProductType;
      });
    }
  }
}
