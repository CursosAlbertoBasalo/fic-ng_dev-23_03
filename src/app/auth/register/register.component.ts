import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup;
  constructor(formBuilder: FormBuilder, private formsService: FormsService) {
    this.form = formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      repeatedPassword: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }

  onRegisterClick() {
    console.log('Register button clicked');
    const password = this.form.value.password;
    const repeatedPassword = this.form.value.repeatedPassword;
    let errors = null;
    if (password !== repeatedPassword) {
      errors = { matchPassword: true };
      this.form.controls['repeatedPassword'].setErrors(errors);
      return;
    }
    this.form.controls['repeatedPassword'].setErrors(errors);
    console.log('Form', this.form.value);
  }

  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getError(controlName: string): string {
    return this.formsService.getError(this.form, controlName);
  }
}
