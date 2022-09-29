import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationPromptComponent } from './confirmation-prompt/confirmation-prompt.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
@NgModule({
  declarations: [ConfirmationPromptComponent, FooterComponent, CarouselComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [MaterialModule, ConfirmationPromptComponent, FooterComponent, CarouselComponent, NavbarComponent],
})
export class SharedComponentsModule {}
