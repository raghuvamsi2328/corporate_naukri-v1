import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Education {
  category: string;
  institution: string;
  subject?: string;
  year: number | null;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList: Education[] = [
    { category: '', institution: '', subject: '', year: null }
  ];
  isValid = false;

  constructor(private router: Router) {}

  validate() {
    this.isValid = this.educationList.every(e => e.category && e.institution && e.year);
  }

  addRow() {
    if (this.educationList.length < 3) {
      this.educationList.push({ category: '', institution: '', subject: '', year: null });
    }
  }

  removeRow(i: number) {
    if (this.educationList.length > 1) {
      this.educationList.splice(i, 1);
      this.validate();
    }
  }

  onPrevious() {
    this.router.navigate(['/profile/personal']);
  }

  onNext() {
    if (this.isValid) {
      this.router.navigate(['/profile/professional']);
    }
  }
}
