import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule
} from '@angular/material';

import { CardComponent } from './components/card/card.component';
import { CardFormComponent } from './components/card-form/card-form.component';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
];

const sharedDeclarations = [
  CardComponent,
  CardFormComponent,
];

const sharedServices = [
  SharedService,
];

@NgModule({
  imports: sharedModules,
  declarations: sharedDeclarations,
  exports: sharedModules.concat(sharedDeclarations),
  providers: sharedServices
})
export class SharedModule { }
