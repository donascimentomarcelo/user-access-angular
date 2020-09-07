import { UserDto } from '../models/user-dto';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserDto[]> {

  constructor(
    private userService: UserService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserDto[] | Observable<UserDto[]> | Promise<UserDto[]> {
    return this.userService.getAll();
  }
}
