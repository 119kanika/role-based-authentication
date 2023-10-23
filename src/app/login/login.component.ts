import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private snackBar: MatSnackBar
    ) {}
  // constructor(private _snackBar: MatSnackBar) { }



  login(): void {
    // Check username and password (hardcoded for simplicity)
    if (this.username === 'user' && this.password === 'user123') {
      this.authService.login();
      this.router.navigate(['/user-dashboard']);
    } 
    else if (this.username === 'admin' && this.password === 'admin123') {
      this.authService.login();
      this.router.navigate(['/admin-dashboard']);
    } 
    else {
      this.openSnackBar('Invalid credentials. Please try again.');
      };
    }

    private openSnackBar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 3000, // Duration the toast is shown (in milliseconds)
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar-style']
      });
    }

  }


  