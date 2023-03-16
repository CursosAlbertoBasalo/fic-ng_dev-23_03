import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css'],
})
export class CopyRightComponent {
  @Input() title = '';
  authorName = 'Alberto Basalo';
  authorUrl = 'https://albertobasalo.dev';

  public getAuthorCaption() {
    return `© ${new Date().getFullYear()} By ${this.authorName}`;
  }
}
