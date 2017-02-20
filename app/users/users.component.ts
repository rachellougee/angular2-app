import { Component , OnInit} from '@angular/core';
import { Router }  from '@angular/router';

const USERS: Users[] = [
  { id: 1, name: 'Rachel Lougee' },
  { id: 2, name: 'Rob Lougee' },
  { id: 3, name: 'Mary Lougee' },
  { id: 4, name: 'Sandy Lougee' },
  { id: 5, name: 'Bob Lougee' }
];

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
   users = Users;

}
