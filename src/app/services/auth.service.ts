import { Injectable } from '@angular/core';
import { AuthDTO } from '../models/auth-dto';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment as env } from './../../environments/environment';
import { Paths } from '../constants/paths';
import { Observable } from 'rxjs';
import { AuthUtil } from '../constants/authUtils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public auth(auth: AuthDTO): Observable<HttpResponse<AuthDTO>> {
    return this.http.post<AuthDTO>(`${env.apiUrl}${Paths.LOGIN}`, auth, AuthUtil.HTTP_OPTIONS);
  }
}
