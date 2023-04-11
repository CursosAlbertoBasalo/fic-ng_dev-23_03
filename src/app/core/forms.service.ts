import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  showError(form: FormGroup, controlName: string): boolean {
    const control = form.controls[controlName];
    if (!control) return false;
    return control.invalid && (control.touched || control.dirty);
  }

  getError(form: FormGroup, controlName: string): string {
    const control = form.controls[controlName];
    if (!control) return '';
    return JSON.stringify(control.errors);
  }
}
