import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './SharesComponents/header/header.component';
import { FooterComponent } from './SharesComponents/footer/footer.component';
import { SliderComponent } from './components/OneWayBinding/slider/slider.component';
import { NotfoundComponent } from './SharesComponents/notfound/notfound.component';
import { LoginComponent } from './components/TwoWayBinding/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './SharesComponents/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/ReactiveForms/register/register.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'gallary', component: SliderComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
  { path: 'notfound', component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
