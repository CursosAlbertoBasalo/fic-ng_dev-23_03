import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  @Output() register: EventEmitter<any> = new EventEmitter<any>();
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
    // POST /users with the form data
    // { fullName, email, password }
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
    const user = {
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.register.emit(user);
  }

  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getError(controlName: string): string {
    return this.formsService.getError(this.form, controlName);
  }
}
