import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = true; // Replace with real auth logic
  menuOpen = false;
  showLoginButton = false;
  showProfileIcon = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.showLoginButton = url === '/' || url === '/landing';
        this.showProfileIcon = !this.showLoginButton && url !== '/login' && url !== '/login-signup';
      }
    });
  }

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
