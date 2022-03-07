import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInterceptor } from './interceptors/MyInterceptor';
import { Pag1Component } from './features/Pag1.component';
import { Pag2Component } from './features/Pag2.component';
import { DetailComponent } from './features/Detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Pag1Component,
    Pag2Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
