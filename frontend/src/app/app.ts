import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Corporate Naukri');
  protected apiStatus = signal<'checking' | 'online' | 'offline'>('checking');
  protected apiMessage = signal('');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkApiStatus();
    // Check API status every 30 seconds
    setInterval(() => this.checkApiStatus(), 30000);
  }

  private checkApiStatus() {
    this.http.get('http://cn-dev.server96.com/api/health', {
      responseType: 'text'
    }).subscribe({
      next: (response) => {
        this.apiStatus.set('online');
        this.apiMessage.set(response);
      },
      error: () => {
        this.apiStatus.set('offline');
        this.apiMessage.set('API is currently unavailable');
      }
    });
  }
}
