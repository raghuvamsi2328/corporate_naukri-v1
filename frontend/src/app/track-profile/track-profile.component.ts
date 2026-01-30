import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-profile.component.html',
  styleUrls: ['./track-profile.component.scss']
})
export class TrackProfileComponent {
  personName = 'John Doe';
  address = 'Hyderabad, Telangana';
  status = 2; // 1: uploaded, 2: reviewed, 3: approved/rejected, 4: interview
  resumeDecision = 'Approved'; // or 'Rejected'
  interviewStatus = 'Pending'; // or 'Approved'/'Rejected'
}
