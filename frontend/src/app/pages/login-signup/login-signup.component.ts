import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  activeTab: 'login' | 'signup' = 'login';

  // Login fields
  loginEmail = '';
  loginPassword = '';
  loginEmailError = false;
  loginPasswordError = false;
  loginEmailTouched = false;
  loginPasswordTouched = false;

  // Signup fields
  signupEmail = '';
  signupPassword = '';
  signupConfirmPassword = '';
  signupEmailError = false;
  signupPasswordError = false;
  signupConfirmPasswordError = false;
  signupEmailTouched = false;
  signupPasswordTouched = false;
  signupConfirmPasswordTouched = false;

  constructor(private router: Router) { }

  switchTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }

  validateLoginEmail() {
    this.loginEmailError = !/^\S+@\S+\.\S+$/.test(this.loginEmail);
  }
  validateLoginPassword() {
    this.loginPasswordError = this.loginPassword.length < 7;
  }

  validateSignupEmail() {
    this.signupEmailError = !/^\S+@\S+\.\S+$/.test(this.signupEmail);
  }
  validateSignupPassword() {
    this.signupPasswordError = this.signupPassword.length < 7;
    this.validateSignupConfirmPassword();
  }
  validateSignupConfirmPassword() {
    this.signupConfirmPasswordError = this.signupPassword !== this.signupConfirmPassword || this.signupConfirmPassword.length < 7;
  }

  onLogin() {
    // TODO: Implement login logic
    alert('Login successful!');
    this.router.navigate(['/dashboard']);
  }

  onSignup() {
    // TODO: Implement signup logic
    alert('Signup successful!');
  }

  toggleAuth() {
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');

    if (loginBox?.classList.contains('hidden')) {
      loginBox.classList.remove('hidden');
      signupBox?.classList.add('hidden');
    } else {
      loginBox?.classList.add('hidden');
      signupBox?.classList.remove('hidden');
    }
  }
}
