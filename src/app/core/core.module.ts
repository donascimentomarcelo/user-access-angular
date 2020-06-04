import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
} from '@angular/material';

const coreModules = [
  CommonModule,
  HttpClientModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: coreModules,
  exports: coreModules
})
export class CoreModule { }
