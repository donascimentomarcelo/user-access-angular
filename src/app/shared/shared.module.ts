import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';

const sharedModules = [
  CommonModule,
  ReactiveFormsModule,
];

const sharedServices = [
  SharedService,
];

@NgModule({
  imports: sharedModules,
  declarations: [],
  exports: sharedModules,
  providers: sharedServices
})
export class SharedModule { }
