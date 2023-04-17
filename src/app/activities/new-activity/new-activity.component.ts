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
  ageCategories = [
    {
      caption: 'Adult',
      icon: '👨🏼‍🦰',
      id: 'adult',
      userId: 1,
    },
    {
      caption: 'Child',
      icon: '👦🏼',
      id: 'child',
      userId: 1,
    },
    {
      caption: 'Family',
      icon: '👨‍👩‍👧‍👦',
      id: 'family',
      userId: 1,
    },
  ];
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
