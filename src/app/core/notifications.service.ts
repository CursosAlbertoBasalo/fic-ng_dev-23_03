import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ErrorNotification = {
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  // notification = 'Hello World';

  private notification$ = new BehaviorSubject<ErrorNotification>({
    message: '',
  });

  notify(message: string) {
    this.notification$.next({ message });
  }

  getNotification$(): Observable<ErrorNotification> {
    return this.notification$.asObservable();
  }
}
