import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,

    private usersServices: UsersService
  ) {}
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.usersServices.getUserById(this.userId).subscribe({
      next: (response) => {
        this.user = response;
      },
    });
  }
}
