import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from 'src/app/core/activities.service';
import { Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent {
  error: string = '';
  constructor(
    private activitiesService: ActivitiesService,
    private router: Router
  ) {}

  onNewActivity(activity: Partial<Activity>) {
    console.log(activity);
    this.activitiesService.addNew$(activity).subscribe({
      next: () => this.router.navigate(['/activities']),
      error: (error) => (this.error = error.error),
    });
  }
}
