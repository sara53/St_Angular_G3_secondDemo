import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  itiTracks: string[] = ['Mearn Track', 'PHP Track'];
  color: string = 'blue';
  flag: boolean = false;
  show: boolean = true;
  toggle() {
    this.flag = !this.flag;
  }
}
