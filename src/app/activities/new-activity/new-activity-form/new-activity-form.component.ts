import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Activity } from 'db/activity.type';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.css'],
})
export class NewActivityFormComponent {
  @Output() newActivity = new EventEmitter<Partial<Activity>>();
  ageCategories = [
    {
      caption: 'Adult',
      icon: '👨🏼‍🦰',
      id: 'adult',
      userId: 1,
    },
    {
      caption: 'Child',
      icon: '👦🏼',
      id: 'child',
      userId: 1,
    },
    {
      caption: 'Family',
      icon: '👨‍👩‍👧‍👦',
      id: 'family',
      userId: 1,
    },
  ];
  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    description: [''],
    location: ['', [Validators.required, Validators.minLength(2)]],
    date: [''],
    minParticipants: [
      5,
      [Validators.required, Validators.min(1), Validators.max(100)],
    ],
    maxParticipants: [
      '10',
      [Validators.required, Validators.min(1), Validators.max(100)],
    ],
    price: [0, [Validators.required, Validators.min(0), Validators.max(1000)]],
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
  onNewClick() {}
}
