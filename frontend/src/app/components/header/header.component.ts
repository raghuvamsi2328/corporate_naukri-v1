import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false; // Replace with real auth logic
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // TODO: Implement logout logic
    this.isLoggedIn = false;
    this.menuOpen = false;
  }

  updateProfile() {
    // TODO: Implement update profile logic
    this.menuOpen = false;
  }

  login() {
    // Redirect to login/signup page
    this.router.navigate(['/login']);
  }
}
