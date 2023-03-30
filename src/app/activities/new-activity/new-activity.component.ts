import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/core/activities.service';
import { ACTIVITY_EMPTY } from 'src/app/data/activity.type';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent {
  constructor(private activitiesService: ActivitiesService) {}

  onNewClick() {
    this.activitiesService.addNew(ACTIVITY_EMPTY);
  }
}
