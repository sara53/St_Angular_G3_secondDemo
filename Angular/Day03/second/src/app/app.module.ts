import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/OneWayBinding/content.component';
import { LoginComponent } from './components/twoWayBinding/login.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/directives/products.component';
import { ProductItemComponent } from './components/directives/product-item/product-item.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, LoginComponent, ProductsComponent, ProductItemComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
