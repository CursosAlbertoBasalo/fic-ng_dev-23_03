import { Component } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //private activities: Activity[] = ACTIVITIES;

  publishedActivities = ACTIVITIES.filter((a) => a.state === 'published');

  // getPublishedActivities(): Activity[] {
  //   return this.activities.filter((a) => a.state === 'published');
  // }
}
