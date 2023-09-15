import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersList: any;
  constructor(private userServices: UsersService) {}
  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe({
      next: (response) => {
        this.usersList = response;
      },
    });
  }
}
