import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.scss']
})
export class LoginSignInComponent {
  activeTab: 'login' | 'signin' = 'login';

  // Login fields
  loginEmail = '';
  loginPassword = '';
  loginEmailValid = false;
  loginPasswordValid = false;
  loginEmailTouched = false;
  loginPasswordTouched = false;

  // Signin fields
  signInEmail = '';
  signInPassword = '';
  confirmPassword = '';
  signInEmailValid = false;
  signInPasswordValid = false;
  confirmPasswordValid = false;
  signInEmailTouched = false;
  signInPasswordTouched = false;
  confirmPasswordTouched = false;

  constructor(private router: Router) {}

  switchTab(tab: 'login' | 'signin') {
    this.activeTab = tab;
    // Reset all fields and validation states when switching tabs
    if (tab === 'login') {
      this.loginEmail = '';
      this.loginPassword = '';
      this.loginEmailValid = false;
      this.loginPasswordValid = false;
      this.loginEmailTouched = false;
      this.loginPasswordTouched = false;
    } else {
      this.signInEmail = '';
      this.signInPassword = '';
      this.confirmPassword = '';
      this.signInEmailValid = false;
      this.signInPasswordValid = false;
      this.confirmPasswordValid = false;
      this.signInEmailTouched = false;
      this.signInPasswordTouched = false;
      this.confirmPasswordTouched = false;
    }
  }

  // --- Login Validation ---
  validateLoginEmail() {
    this.loginEmailTouched = true;
    this.loginEmailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.loginEmail);
  }
  validateLoginPassword() {
    this.loginPasswordTouched = true;
    this.loginPasswordValid = this.loginPassword.length > 6;
  }
  canLogin() {
    return this.loginEmailValid && this.loginPasswordValid;
  }
  onLogin() {
    this.loginEmailTouched = true;
    this.loginPasswordTouched = true;
    this.validateLoginEmail();
    this.validateLoginPassword();
    if (this.canLogin()) {
      // Simulate login success
      this.router.navigate(['/profile/personal']);
    }
  }

  // --- Sign In Validation ---
  validateSignInEmail() {
    this.signInEmailTouched = true;
    this.signInEmailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.signInEmail);
  }
  validateSignInPassword() {
    this.signInPasswordTouched = true;
    this.signInPasswordValid = this.signInPassword.length > 6;
    this.validateConfirmPassword();
  }
  validateConfirmPassword() {
    this.confirmPasswordTouched = true;
    this.confirmPasswordValid = this.confirmPassword.length > 6 && this.confirmPassword === this.signInPassword;
  }
  canSignIn() {
    return this.signInEmailValid && this.signInPasswordValid && this.confirmPasswordValid;
  }
  onSignIn() {
    this.signInEmailTouched = true;
    this.signInPasswordTouched = true;
    this.confirmPasswordTouched = true;
    this.validateSignInEmail();
    this.validateSignInPassword();
    this.validateConfirmPassword();
    if (this.canSignIn()) {
      // Simulate sign in success
      this.router.navigate(['/profile/personal']);
    }
  }
}
