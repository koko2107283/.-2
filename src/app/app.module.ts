import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-comps/header/header.component';
import { HomeComponent } from './home-comps/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FilterCardsComponent } from './home-comps/filter-cards/filter-cards.component';
import { FooterComponent } from './home-comps/footer/footer.component';
import { HeaderCartComponent } from './cart-comps/header-cart/header-cart.component';
import { CartProductsComponent } from './cart-comps/cart-products/cart-products.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomePageComponent,
    CartPageComponent,
    FilterCardsComponent,
    FooterComponent,
    HeaderCartComponent,
    CartProductsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
