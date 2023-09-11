import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // inputValue: string = '';
  // getInputValue(e: any) {
  //   this.inputValue = e.target.value;
  // }

  studentName: string = '';
  studentAge: number = 0;
  selectedCourse: string = '';

  // getStudentName(e: any) {
  //   this.studentName = e.target.value;
  // }
  // getStudentAge(e: any) {
  //   this.studentAge = e.target.value;
  // }

  login(e: any) {
    e.preventDefault();
    console.log(this.studentName);
    console.log(this.studentAge);
  }
}
