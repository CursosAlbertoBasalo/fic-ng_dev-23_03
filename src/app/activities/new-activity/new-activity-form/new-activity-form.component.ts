import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'db/activity.type';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.css'],
})
export class NewActivityFormComponent {
  @Output() newActivity = new EventEmitter<Partial<Activity>>();
  @Input() ageCategories: any[] = [];
  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    description: [''],
    location: ['', [Validators.required, Validators.minLength(2)]],
    date: [''],
    minParticipants: [
      5,
      [Validators.required, Validators.min(1), Validators.max(100)],
    ],
    maxParticipants: [
      10,
      [Validators.required, Validators.min(1), Validators.max(100)],
    ],
    price: [
      100,
      [Validators.required, Validators.min(0), Validators.max(1000)],
    ],
    currency: ['EUR', [Validators.required]],
    state: ['draft'],
    ageCategory: ['adult'],
  });
  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService
  ) {}

  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getError(controlName: string): string {
    return this.formsService.getError(this.form, controlName);
  }
  onNewClick() {
    if (this.form.valid) {
      const activity: Partial<Activity> = this.form.value as Partial<Activity>;
      this.newActivity.emit(activity);
    }
  }
}
