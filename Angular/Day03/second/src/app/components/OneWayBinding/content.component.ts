import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  i: number = 0;
  imagesList: string[] = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];
  componentTitle: string = 'Our Products';
  flag: boolean = false;
  imgSrc: string = 'assets/imgs/1.jpg';
  imgSrc2: string = 'assets/imgs/4.jpg';

  show(): void {
    this.componentTitle = 'next Image';
    this.imgSrc2 = 'assets/imgs/3.jpg';
  }

  nextImage() {
    this.i++;
    if (this.i == this.imagesList.length) this.i = 0;
    this.imgSrc = this.imagesList[this.i];
  }
}
