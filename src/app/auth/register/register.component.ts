import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccessToken } from 'src/app/data/credentials.type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  error: string = '';

  constructor(private httpClient: HttpClient) {}

  onRegister(user: any) {
    console.log('Register', user);
    this.httpClient
      .post<AccessToken>('http://localhost:3000/users', user)
      .subscribe((accessToken) => console.log('Access token', accessToken));
  }
}
