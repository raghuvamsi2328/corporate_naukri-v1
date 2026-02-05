import { Component, HostListener } from '@angular/core';
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
  loading = false; // For animated button state
  activeSection = 'home';
  isDarkMode = false;
  mobileMenuOpen = false;

  constructor(public router: Router) { // Make router public for template access
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
    this.applyDarkMode();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.showLoginButton = url === '/' || url === '/landing';
        this.showProfileIcon = !this.showLoginButton && url !== '/login' && url !== '/login-signup';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if we're on the landing page
    if (this.router.url !== '/' && this.router.url !== '/landing') {
      return;
    }

    const sections = ['home', 'about', 'services', 'contact'];
    const scrollPosition = window.pageYOffset + 150;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    // Navigate to landing page if not already there
    if (this.router.url !== '/' && this.router.url !== '/landing') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollTo(sectionId);
        }, 100);
      });
    } else {
      this.scrollTo(sectionId);
    }
  }

  private scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection = sectionId;
    }
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
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/login']);
    }, 1200); // Simulate loading animation
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  private applyDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
