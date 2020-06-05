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
} from '@angular/material';

import { CardComponent } from './component/card/card.component';
import { CardFormComponent } from './component/card-form/card-form.component';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
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
