import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { LoginComponent } from '../TwoWayBinding/login/login.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log(this.myContentInput?.nativeElement.value);
  }
  tracks: any[] = ['Mearn', 'IOT', 'PD'];
  @ViewChild('myCard') myCardElement: ElementRef | undefined;
  @ViewChild(LoginComponent) loginRef: LoginComponent | undefined;
  @ContentChild('contentInput') myContentInput: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.myCardElement?.nativeElement.focus();
  }

  addNewCard() {
    // let result = this.loginRef?.whoAmI();

    // console.log(result);
    this.tracks.push(this.myCardElement?.nativeElement.value);
  }
}
