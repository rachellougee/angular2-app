import { Component } from '@angular/core';
import { Router }  from '@angular/router';

const USERS: Users[] = [
  { id: 1, name: 'Rachel Lougee' },
  { id: 2, name: 'Rob Lougee' },
  { id: 3, name: 'Mary Lougee' },
  { id: 4, name: 'Sandy Lougee' },
  { id: 5, name: 'Bob Lougee' }
];

@Component({
  selector: 'my-users',
  templateUrl: './templates/users.html',
  styleUrls: [ "./css/styles.css" ]
})

export class UsersComponent  {
   users = USERS;
}
