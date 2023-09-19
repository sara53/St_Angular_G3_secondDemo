import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() onSelectedPage = new EventEmitter();

  showSelectedPage(x: HTMLAnchorElement) {
    console.log(x.textContent);
    this.onSelectedPage.emit(x.textContent);
  }
}
