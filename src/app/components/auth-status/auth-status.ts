import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-status',
  imports: [],
  templateUrl: './auth-status.html',
  styleUrl: './auth-status.css',
})
export class AuthStatus {
  protected isLoggedIn = false;

  protected toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
