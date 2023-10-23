import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string
}


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private router: Router) {}
  isEditable: boolean = false;


  displayedColumns: string[] = ['name', 'email', 'actions'];

  dataSource: User[] = [
    { name: 'John', email: 'jonh@m.com' },
    { name: 'Alice', email: 'blice@m.com' },
    { name: 'Bob', email: 'bob@m.com' },
    { name: 'Eva', email: 'eva@m.com' },
    { name: 'Daniel', email: 'dan@m.com' }
  ];

  editUser(user: User): void {
    console.log(`Edit ${user.name}`)
  }

  deleteUser(user: User): void {
    console.log(`Delete ${user.name}`);
  }
  }

  // logout(): void {
  //   this.router.navigate(['/']);
  // }




