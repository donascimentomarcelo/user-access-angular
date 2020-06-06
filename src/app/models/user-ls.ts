import { JwtHelperService } from '@auth0/angular-jwt';

export class UserLS {

    constructor(
        public token: string,
        public username: string,
    ) { }

    private static jwtHelper: JwtHelperService = new JwtHelperService();

    public static decodeToken = (token: string) => UserLS.jwtHelper.decodeToken(token).sub;
}
