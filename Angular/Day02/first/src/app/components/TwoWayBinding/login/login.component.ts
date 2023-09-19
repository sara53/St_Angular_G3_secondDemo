import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnChanges {
  prevName: string = '';
  flag: boolean = true;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.serverName.firstChange) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    this.prevName = changes['serverName'].previousValue;
  }
  firstName: string = '';
  lastName: string = '';
  errorMsg: string = '';

  @Input() serverName: string = '';

  @Output() onLogin = new EventEmitter();
  login(e: Event) {
    e.preventDefault();
    if (this.isFirstNameValid) {
      this.onLogin.emit();
    } else {
      this.errorMsg = 'Enter Valid Data';
    }
  }

  whoAmI() {
    return "I'm Sara, Welcome From ITI";
  }
  get isFirstNameEmpty() {
    return this.firstName === '';
  }
  get isFirstNameValid() {
    return this.firstName.length >= 3;
  }
}
