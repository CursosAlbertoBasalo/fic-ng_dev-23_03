import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccessToken, Credentials } from 'src/app/data/credentials.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = '🔐 Login';
  error: string = '';
  constructor(private httpClient: HttpClient) {}

  onLogin(credentials: Credentials) {
    console.log('Login with credentials', credentials);
    this.httpClient
      .post<AccessToken>('http://localhost:3000/login', credentials)
      .subscribe({
        next: (response) => console.log(response.accessToken),
        error: (error) => (this.error = error.error),
      });
  }
}
