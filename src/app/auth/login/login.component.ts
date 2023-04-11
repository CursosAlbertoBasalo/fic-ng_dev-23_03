import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }
  showError(controlName: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) return false;
    return control.invalid && (control.touched || control.dirty);
  }

  getError(controlName: string): string {
    const control = this.form.controls[controlName];
    if (!control) return '';
    return JSON.stringify(control.errors);
  }

  onLoginClick() {
    console.log('Login button clicked');
    console.log('Form', this.form.value);
  }
}
