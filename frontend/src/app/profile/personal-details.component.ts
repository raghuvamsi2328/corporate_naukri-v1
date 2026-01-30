import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  fullName = '';
  age: number | null = null;
  gender = '';
  phone = '';
  address = '';
  hometown = '';
  isValid = false;
  touched = false;

  constructor(private router: Router) {}

  validate() {
    this.touched = true;
    this.isValid = !!(
      this.fullName &&
      this.age && this.age > 19 &&
      this.gender &&
      this.phone &&
      this.address &&
      this.hometown
    );
  }

  onPrevious() {
    this.router.navigate(['/auth']);
  }

  onNext() {
    if (this.isValid) {
      this.router.navigate(['/profile/education']);
    }
  }
}
