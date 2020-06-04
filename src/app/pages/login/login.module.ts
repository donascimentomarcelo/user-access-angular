import { CoreModule } from './../../core/core.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    SharedModule,
    CoreModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
