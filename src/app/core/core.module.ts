import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
} from '@angular/material';

const coreModules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
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
