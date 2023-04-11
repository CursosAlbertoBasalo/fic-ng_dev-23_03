import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { LabelControlComponent } from './label-control/label-control.component';

@NgModule({
  declarations: [ActivityItemComponent, LabelControlComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ActivityItemComponent, ReactiveFormsModule, LabelControlComponent],
})
export class SharedModule {}
