import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activities: Activity[] = [];

  private order = 1;
  private searchTerm = '';

  constructor(private activitiesService: ActivitiesService) {
    this.setActivities();
  }

  changeOrder() {
    this.order = this.order * -1;
    this.setActivities();
  }

  onSearchChange(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.setActivities();
  }

  private setActivities() {
    this.activities = this.activitiesService.getPublished(
      this.searchTerm.toLowerCase(),
      this.order
    );
  }
}
