import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewActivityRoutingModule } from './new-activity-routing.module';
import { NewActivityComponent } from './new-activity.component';


@NgModule({
  declarations: [
    NewActivityComponent
  ],
  imports: [
    CommonModule,
    NewActivityRoutingModule
  ]
})
export class NewActivityModule { }
