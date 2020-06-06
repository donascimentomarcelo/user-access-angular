import { HttpHeaders } from '@angular/common/http';

export abstract class AuthUtil {
    static readonly HTTP_OPTIONS = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response' as 'response'
    };
}
