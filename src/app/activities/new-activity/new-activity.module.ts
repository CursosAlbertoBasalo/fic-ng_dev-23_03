import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { NewActivityFormComponent } from './new-activity-form/new-activity-form.component';
import { NewActivityRoutingModule } from './new-activity-routing.module';
import { NewActivityComponent } from './new-activity.component';

@NgModule({
  declarations: [NewActivityComponent, NewActivityFormComponent],
  imports: [CommonModule, NewActivityRoutingModule, SharedModule],
})
export class NewActivityModule {}
