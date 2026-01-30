import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss']
})
export class ResumeUploadComponent {
  file: File | null = null;
  touched = false;

  constructor(private router: Router) {}

  onFileChange(event: Event) {
    this.touched = true;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    } else {
      this.file = null;
    }
  }

  onSubmit() {
    if (this.file) {
      // Simulate upload and go to track profile
      this.router.navigate(['/track']);
    }
  }
}
