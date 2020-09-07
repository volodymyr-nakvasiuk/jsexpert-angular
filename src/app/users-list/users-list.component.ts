import {Component, OnInit} from '@angular/core';
import {MatListOption} from '@angular/material/list';

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

  orderDirection = '1';

  nameFilter = '';

  ngOnInit(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    this.usersList = this.userService.getUsersList(+this.orderDirection, this.nameFilter);
  }

  addUser(newUserName: string, newName: string, newRole: string): void {
    this.userService.addUser({
      id: this.randomInt(60, 600),
      name: newName,
      username: newUserName,
      email: '',
      role: newRole,
      phone: '+1',
      website: ''
    } as User);

    this.filterUsers();
  }

  removeUsers(selected: MatListOption[]): void {
    this.userService.removeUsers(selected.map(option => option.value));
    this.filterUsers();
  }

  /**
   * generate a random integer between min and max
   */
  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
