import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [CommonModule, ActivitiesRoutingModule, SharedModule],
})
export class ActivitiesModule {}
