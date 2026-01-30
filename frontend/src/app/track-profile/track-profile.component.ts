import { Component } from '@angular/core';

@Component({
  selector: 'app-track-profile',
  standalone: true,
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
