import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ErrorNotification,
  NotificationsService,
} from 'src/app/core/notifications.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ErrorComponent {
  // errorMessage = '';
  errorMessage$: Observable<ErrorNotification> =
    this.notifications.getNotification$();

  constructor(private notifications: NotificationsService) {
    //this.errorMessage = this.notifications.notification;
    // this.notifications.notification$.subscribe((message) => {
    //   console.log('ErrorComponent', message);
    //   this.errorMessage = message;
    // });
  }
}
