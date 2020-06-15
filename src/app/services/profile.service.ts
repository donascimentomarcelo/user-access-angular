import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../models/user-dto';
import { Observable } from 'rxjs';
import { Paths } from './../constants/paths';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  findByUsername(username: string): UserDto | Observable<UserDto> | Promise<UserDto> {
    return this.http.get<UserDto>(`${env.apiUrl}${Paths.USERS}/findByUsername?username=${username}`);
  }
}
