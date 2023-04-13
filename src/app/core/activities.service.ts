import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ACTIVITIES } from '../data/activities.data';
import { ACTIVITY_EMPTY, Activity } from '../data/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Activity[] {
    return ACTIVITIES;
  }

  getAll$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('http://localhost:3000/activities');
  }

  getPublished(byTitle: string, sortOrder: number): Activity[] {
    return ACTIVITIES.filter((a) => a.state === 'published')
      .filter((a) => a.title.toLowerCase().includes(byTitle.toLowerCase()))
      .sort((a, b) => (a.price - b.price) * sortOrder);
  }

  getBySlug(slug: string): Activity {
    const foundActivity = ACTIVITIES.find((a) => a.slug === slug);
    return foundActivity || ACTIVITY_EMPTY;
  }
  getBySlug$(slug: string): Observable<Activity> {
    const url = 'http://localhost:3000/activities/?slug=' + slug;

    return this.httpClient.get<Activity[]>(url).pipe(
      tap((arrayResponse) => console.warn(arrayResponse)),
      map((arrayResponse) => arrayResponse[0] || ACTIVITY_EMPTY),
      tap((itemExtracted) => console.warn(itemExtracted))
    );
  }

  addNew(activity: Activity): void {
    ACTIVITIES.push(activity);
  }
}
