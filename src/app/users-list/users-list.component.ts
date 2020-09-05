import {Component, OnInit} from '@angular/core';

import {User} from '../shared/models/user.model';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  usersList: User[];

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }
}
