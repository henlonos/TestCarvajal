import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.route';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { RegisterArticlesComponent } from './components/register-articles/register-articles.component';
import { HomeComponent } from './components/home/home.component';
import {  NgbModule,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuerysComponent } from './components/querys/querys.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    RegisterArticlesComponent,
    HomeComponent,
    QuerysComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
