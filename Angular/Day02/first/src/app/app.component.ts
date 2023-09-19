import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resetServerNameValue: string = 'saraServer';
  constructor(public router: Router) {
    console.log(this.router.url);
  }
  page: string = 'Login';
  showSelectedComponent(selectedPage: string) {
    this.page = selectedPage;
  }
  login() {
    this.page = 'Gallary';
  }

  resetServer() {
    this.resetServerNameValue = 'default Name';
  }
}
