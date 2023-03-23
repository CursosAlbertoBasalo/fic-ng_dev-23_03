import { Component } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //private activities: Activity[] = ACTIVITIES;

  order = 1;

  publishedActivities = ACTIVITIES.filter((a) => a.state === 'published').sort(
    (a, b) => (a.price - b.price) * this.order
  );

  changeOrder() {
    this.order = this.order * -1;
    console.log(this.order);
    this.publishedActivities = ACTIVITIES.filter(
      (a) => a.state === 'published'
    ).sort((a, b) => (a.price - b.price) * this.order);
  }

  // getPublishedActivities(): Activity[] {
  //   return this.activities.filter((a) => a.state === 'published');
  // }
}
