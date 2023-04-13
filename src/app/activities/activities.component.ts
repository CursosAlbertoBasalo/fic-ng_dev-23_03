import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {
  title = 'Activities administration';
  // activities: Activity[] = [];
  activities$: Observable<Activity[]> = this.activitiesService.getAll$();
  constructor(
    private activitiesService: ActivitiesService //cdr: ChangeDetectorRef
  ) {
    //this.activities = activitiesService.getAll();
    // activitiesService.getAll$().subscribe((body: Activity[]) => {
    //   this.activities = body;
    //   cdr.markForCheck();
    // });
  }
}
