import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() submitForm = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  submit = () => this.submitForm.emit();

}
