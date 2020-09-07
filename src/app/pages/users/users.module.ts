import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    SharedModule,
    CoreModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
