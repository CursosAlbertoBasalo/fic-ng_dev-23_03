import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';
import { ActivitiesService } from '../core/activities.service';
import { ACTIVITY_EMPTY, Activity } from '../data/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  activities: Activity[] = [];
  error: string = '';
  private order = 1;
  private searchTerm = '';

  constructor(private activitiesService: ActivitiesService) {
    // this.setActivities();
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((event: any) => event.target.value),
        filter((searchTerm: string) => searchTerm.length >= 2),
        distinctUntilChanged(),
        switchMap((searchTerm: string) =>
          this.activitiesService.getPublished$(searchTerm, this.order)
        )
      )
      .subscribe({
        next: (body) => (this.activities = body),
        error: (err) => {
          this.activities = [ACTIVITY_EMPTY];
          this.error = err;
        },
      });
  }

  changeOrder() {
    this.order = this.order * -1;
    this.setActivities();
  }
  private setActivities() {
    // this.activities = this.activitiesService.getPublished(
    //   this.searchTerm.toLowerCase(),
    //   this.order
    // );
    // this.activitiesService.getPublished$(this.searchTerm, this.order).subscribe(
    //   (body) => (this.activities = body),
    //   (err) => (this.activities = [ACTIVITY_EMPTY])
    // );
    // this.activitiesService
    //   .getPublished$(this.searchTerm, this.order)
    //   .subscribe({
    //     next: (body) => (this.activities = body),
    //     error: (err) => {
    //       this.activities = [ACTIVITY_EMPTY];
    //       this.error = err;
    //     },
    //   });
  }
}
