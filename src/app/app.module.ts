import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarSimpleModule } from './components/navbar-simple/navbar-simple.module';
import { AloLoadSpinnerModule } from './components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarSimpleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    AloLoadSpinnerModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// TODO api google AIzaSyDRIF01dIqTO3KGa96ss-h24GNQNHn9Opw
