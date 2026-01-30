import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, HttpClientModule],
  template: `
    <app-header [showBack]="showBackButton()" [title]="getTitle()"></app-header>
    <main style="min-height:80vh;">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.scss'
})
export class App {
  showBackButton() {
    return window.location.pathname !== '/auth';
  }
  getTitle() {
    // You can enhance this to return dynamic titles based on route
    return 'Corporate Naukri';
  }
}
