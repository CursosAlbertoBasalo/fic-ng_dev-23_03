import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private notifications: NotificationsService) {}

  handleError(error: any): void {
    const message: string = error.message
      ? error.message
      : JSON.stringify(error);
    this.notifications.notify(message);
    console.warn(message);
  }
}
