import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadComponent: () => import('./auth/login-signin.component').then(m => m.LoginSignInComponent) },
  { path: 'profile/personal', loadComponent: () => import('./profile/personal-details.component').then(m => m.PersonalDetailsComponent) },
  { path: 'profile/education', loadComponent: () => import('./profile/education.component').then(m => m.EducationComponent) },
  { path: 'profile/professional', loadComponent: () => import('./profile/professional-details.component').then(m => m.ProfessionalDetailsComponent) },
  { path: 'profile/resume', loadComponent: () => import('./profile/resume-upload.component').then(m => m.ResumeUploadComponent) },
  { path: 'track', loadComponent: () => import('./track-profile/track-profile.component').then(m => m.TrackProfileComponent) },
];
