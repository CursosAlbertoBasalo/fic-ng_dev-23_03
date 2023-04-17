import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { ACTIVITIES } from '../data/activities.data';
import { ACTIVITY_EMPTY, Activity } from '../data/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  url = 'http://localhost:3000/activities';

  constructor(private httpClient: HttpClient) {}

  // getAll(): Activity[] {
  //   return ACTIVITIES;
  // }

  getAll$(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.url);
  }

  // getPublished(byTitle: string, sortOrder: number): Activity[] {
  //   return ACTIVITIES.filter((a) => a.state === 'published')
  //     .filter((a) => a.title.toLowerCase().includes(byTitle.toLowerCase()))
  //     .sort((a, b) => (a.price - b.price) * sortOrder);
  // }

  getPublished$(byTitle: string, sortOrder: number): Observable<Activity[]> {
    // ToDo: Implement the search by title and sort by price
    return this.httpClient.get<Activity[]>(this.url);
  }

  // getBySlug(slug: string): Activity {
  //   const foundActivity = ACTIVITIES.find((a) => a.slug === slug);
  //   return foundActivity || ACTIVITY_EMPTY;
  // }
  getBySlug$(slug: string): Observable<Activity> {
    const url = this.url + '?slug=' + slug;
    return this.httpClient.get<Activity[]>(url).pipe(
      // catchError((error) => {
      //   console.warn('Error cached: ', error);
      //   return of([]);
      // }),
      tap((arrayResponse) => console.warn(arrayResponse)),
      map((arrayResponse) => arrayResponse[0] || ACTIVITY_EMPTY),
      tap((itemExtracted) => console.warn(itemExtracted))
    );
  }

  addNew(activity: Activity): void {
    ACTIVITIES.push(activity);
  }

  addNew$(activity: Activity): Observable<Activity> {
    // ToDo: Implement the addNew$ method
    return of(ACTIVITY_EMPTY);
  }
}
