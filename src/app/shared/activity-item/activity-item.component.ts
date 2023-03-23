import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/data/activity.type';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent {
  @Input() activity!: Activity;
}
