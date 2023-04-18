import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivitiesService } from 'src/app/core/activities.service';
import { Activity, AgeCategory } from 'src/app/data/activity.type';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css'],
})
export class NewActivityComponent {
  error: string = '';
  ageCategories$: Observable<AgeCategory[]>;

  constructor(
    private activitiesService: ActivitiesService,
    private router: Router,
    httpClient: HttpClient
  ) {
    this.ageCategories$ = httpClient.get<any[]>(
      'http://localhost:3000/ageCategories'
    );
  }

  onNewActivity(activity: Partial<Activity>) {
    console.log(activity);
    this.activitiesService.addNew$(activity).subscribe({
      next: () => this.router.navigate(['/activities']),
      error: (error) => (this.error = error.error),
    });
  }
}
