import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from './../library/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [HomeComponent, ProductsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
