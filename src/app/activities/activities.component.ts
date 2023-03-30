import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  activities: Activity[];

  constructor(activitiesService: ActivitiesService) {
    this.activities = activitiesService.getAll();
  }
}
