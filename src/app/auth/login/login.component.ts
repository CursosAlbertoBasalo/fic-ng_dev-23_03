import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  constructor(formBuilder: FormBuilder, private formsService: FormsService) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }
  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getError(controlName: string): string {
    return this.formsService.getError(this.form, controlName);
  }

  onLoginClick() {
    console.log('Login button clicked');
    console.log('Form', this.form.value);
  }
}
