import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/core/activities.service';
import { Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent {
  constructor(private activitiesService: ActivitiesService) {}

  onNewActivity(activity: Partial<Activity>) {
    console.log(activity);
    this.activitiesService.addNew$(activity).subscribe();
  }
}
