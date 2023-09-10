import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent, FooterComponent, SliderComponent, ProductsComponent, ProductsItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
