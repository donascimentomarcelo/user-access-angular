import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
} from '@angular/material';
import { AuthInterceptor } from '../interceptors/auth-interceptor';

const coreModules = [
  CommonModule,
  HttpClientModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
];

const coreProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

@NgModule({
  declarations: [],
  imports: coreModules,
  exports: coreModules,
  providers: coreProviders,
})
export class CoreModule { }
