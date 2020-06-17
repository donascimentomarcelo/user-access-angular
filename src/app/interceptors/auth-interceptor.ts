import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { Constants } from '../constants/constants';
import { environment } from 'src/environments/environment';
import { UserLS } from '../models/user-ls';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private storageService: StorageService, ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.storageService.getUser();
        const request = this.checkUrl(req);

        return user && request ? this.configureHeader(req, next, user) : next.handle(req);
    }

    private configureHeader(req: HttpRequest<any>, next: HttpHandler, user: UserLS): Observable<HttpEvent<any>> {
        const authReq = req.clone(
            {
                headers: req.headers.set(
                    Constants.AUTHORIZARION,
                    `${Constants.BEARER}${user.token}`
                )
            }
        );
        return next.handle(authReq);
    }

    private checkUrl = (req: HttpRequest<any>) => req.url.substring(Constants.ZERO, environment.apiUrl.length) === environment.apiUrl;
}
