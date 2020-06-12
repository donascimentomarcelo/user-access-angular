import { StorageService } from './../../../services/storage.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLS } from 'src/app/models/user-ls';
import { Constants } from 'src/app/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router) { }

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
        const token = UserLS.extractToken(response.headers.get(Constants.AUTHORIZARION));
        const username = UserLS.extractUsername(token);
        const ls = new UserLS(token, username);
        this.storageService.setUser(ls);
        this.router.navigate(['profile/', this.form.value.username]);
      });
  }
}
