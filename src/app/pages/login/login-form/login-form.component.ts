import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLS } from 'src/app/models/user-ls';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit(): void {
    this.authService.auth(this.form.value)
      .subscribe(response => {
        const token = response.headers.get('Authorization').substring(7);
        console.log(UserLS.decodeToken(token));
      });
  }
}
