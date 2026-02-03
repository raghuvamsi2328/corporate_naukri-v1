import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  currentStep: number = 1;

  // Step 1: Personal Details
  userData = {
    fullName: '', age: null, gender: '', phone: '', address: '', hometown: ''
  };

  // Step 2: Education Details
  educationRows = [
    { category: '', institution: '', subject: '', year: null }
  ];

  // Step 3: Professional Details
  professional = {
    category: '', // 'Experienced' or 'Fresher'
    company: '', industry: '', roleCategory: '', jobRole: '',
    keySkills: ''
  };

  // Step 4: Resume
  selectedFile: File | null = null;

  // Education Row Logic
  addRow() {
    if (this.educationRows.length < 3) {
      this.educationRows.push({ category: '', institution: '', subject: '', year: null });
    }
  }

  removeRow(index: number) {
    if (this.educationRows.length > 1) {
      this.educationRows.splice(index, 1);
    }
  }

  // File Upload
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Navigation Logic
  nextStep() { if (this.currentStep < 4) this.currentStep++; }
  prevStep() { if (this.currentStep > 1) this.currentStep--; }

  onSubmit() {
    console.log('Final Data:', { 
      personal: this.userData, 
      education: this.educationRows, 
      professional: this.professional 
    });
    alert('Submitting details. Redirecting to Payment...');
  }
}