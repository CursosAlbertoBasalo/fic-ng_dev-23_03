import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
export class ErrorComponent implements OnInit {
  errorMessage!: ErrorNotification;
  // errorMessage$: Observable<ErrorNotification> = this.notifications.getNotification$();

  constructor(
    private notifications: NotificationsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //this.errorMessage = this.notifications.notification;
    this.notifications.getNotification$().subscribe((message) => {
      console.log('Receiving', message);
      this.errorMessage = message;
      this.cdr.detectChanges();
    });
  }
}
