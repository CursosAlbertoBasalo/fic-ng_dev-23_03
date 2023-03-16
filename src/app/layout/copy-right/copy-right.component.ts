import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css'],
})
export class CopyRightComponent {
  title = 'Activity Bookings';
  authorName = 'Alberto Basalo';
  authorUrl = 'https://albertobasalo.dev';
  public getAuthorCaption() {
    return `© ${new Date().getFullYear()} By ${this.authorName}`;
  }
}
