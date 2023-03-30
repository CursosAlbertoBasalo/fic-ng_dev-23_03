import { Injectable } from '@angular/core';
import { ACTIVITIES } from '../data/activities.data';
import { Activity } from '../data/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor() {}

  getAll(): Activity[] {
    return ACTIVITIES;
  }

  getPublished(byTitle: string, sortOrder: number): Activity[] {
    return ACTIVITIES.filter((a) => a.state === 'published')
      .filter((a) => a.title.toLowerCase().includes(byTitle.toLowerCase()))
      .sort((a, b) => (a.price - b.price) * sortOrder);
  }

  addNew(activity: Activity): void {
    ACTIVITIES.push(activity);
  }
}
