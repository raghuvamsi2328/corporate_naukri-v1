import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar">
      <div class="nav-content">
        <button *ngIf="showBack" class="btn btn-secondary" (click)="onBack()">Back</button>
        <div class="logo">
          <img src="/assets/logo.png" alt="Logo" style="height:32px;vertical-align:middle;margin-right:8px;">
          <span>{{ title }}</span>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showBack = false;
  @Input() title = '';
  onBack() {
    window.history.back();
  }
}
