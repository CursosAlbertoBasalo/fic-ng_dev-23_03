import { Component } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
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

  constructor() {
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
    this.activities = ACTIVITIES.filter(
      (a) =>
        a.state === 'published' &&
        (this.searchTerm === '' ||
          a.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    ).sort((a, b) => (a.price - b.price) * this.order);
  }
}
