import { Component } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activities: Activity[] = ACTIVITIES;
}
