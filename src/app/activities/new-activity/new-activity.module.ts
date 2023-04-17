import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewActivityRoutingModule } from './new-activity-routing.module';
import { NewActivityComponent } from './new-activity.component';
import { NewActivityFormComponent } from './new-activity-form/new-activity-form.component';


@NgModule({
  declarations: [
    NewActivityComponent,
    NewActivityFormComponent
  ],
  imports: [
    CommonModule,
    NewActivityRoutingModule
  ]
})
export class NewActivityModule { }
