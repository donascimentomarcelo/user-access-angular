import { ProfileService } from './../services/profile.service';
import { UserDto } from './../models/user-dto';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<UserDto> {

  constructor(
    private profileService: ProfileService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserDto | Observable<UserDto> | Promise<UserDto> {
    return this.profileService.findByUsername(route.paramMap.get('username'));
  }
}
