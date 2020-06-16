import { ProfileService } from './../../../services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from 'src/app/models/user-dto';
import { Constants } from 'src/app/constants/constants';
import { ClientDto } from 'src/app/models/client-dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public form: FormGroup;
  private id = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.form = this.buildForm();
    this.checkIfIsEditing();
  }

  submit = () => {
    const user = UserDto.fromEntity(this.form.value);
    this.profileService.update(user, this.id)
      .subscribe(resp => console.log(resp));
  }

  private checkIfIsEditing(): void {
    const user = UserDto.fromEntity(this.route.snapshot.data.profile);
    this.removingPropertiesUnuseful(user);
    if (this.route.url[Constants.VALUE][Constants.ZERO].path !== Constants.NEW) {
      this.form.setValue(user);
      this.form.controls.username.disable();
    }
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      username: [null, [Validators.required]],
      client: this.fb.group({
        email: [null, [Validators.required]],
        name: [null, [Validators.required]],
      })
    });
  }

  private removingPropertiesUnuseful(user: UserDto): void {
    this.id = user.id;
    delete user.profiles;
    delete user.id;
    delete user.password;
    delete user.client.id;
  }

}
