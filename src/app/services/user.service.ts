import { HttpClient } from '@angular/common/http';
import { UserDto } from './../models/user-dto';
import { Injectable } from '@angular/core';
import { Paths } from './../constants/paths';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): UserDto[] | Observable<UserDto[]> | Promise<UserDto[]> {
    return this.http.get<UserDto[]>(`${env.apiUrl}${Paths.USERS}`);
  }

}
