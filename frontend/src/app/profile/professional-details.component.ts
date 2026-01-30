import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent {
  category = '';
  company = '';
  industry = '';
  roleCategory = '';
  jobRole = '';
  keySkills = '';
  isValid = false;
  keySkillsValid = false;
  touched = false;

  constructor(private router: Router) {}

  validate() {
    this.touched = true;
    const keySkillsWordCount = this.keySkills.trim().split(/\s+/).length;
    this.keySkillsValid = keySkillsWordCount >= 100 && keySkillsWordCount <= 1500;
    if (this.category === 'Experienced') {
      this.isValid = !!(
        this.category && this.company && this.industry && this.roleCategory && this.jobRole && this.keySkillsValid
      );
    } else if (this.category === 'Fresher') {
      this.isValid = !!(this.category && this.keySkillsValid);
    } else {
      this.isValid = false;
    }
  }

  onPrevious() {
    this.router.navigate(['/profile/education']);
  }

  onNext() {
    if (this.isValid) {
      this.router.navigate(['/profile/resume']);
    }
  }
}
