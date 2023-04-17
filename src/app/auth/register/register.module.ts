import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule],
})
export class RegisterModule {}
