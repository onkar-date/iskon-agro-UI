import { SharedComponentsModule } from './library/shared-components/shared-components.module';
import { PagesModule } from './pages/pages.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppErrorHandlerService } from 'src/app-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PagesModule,
    SharedComponentsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      easing: 'ease-in',
      maxOpened: 1,
      autoDismiss: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
