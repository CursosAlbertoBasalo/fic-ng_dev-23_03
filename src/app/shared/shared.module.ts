import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivityItemComponent } from './activity-item/activity-item.component';

@NgModule({
  declarations: [ActivityItemComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ActivityItemComponent, ReactiveFormsModule],
})
export class SharedModule {}
