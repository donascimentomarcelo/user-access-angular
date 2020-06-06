import { Constants } from 'src/app/constants/constants';
import { JwtHelperService } from '@auth0/angular-jwt';

export class UserLS {

    constructor(
        public token: string,
        public username: string,
    ) { }

    private static jwtHelper: JwtHelperService = new JwtHelperService();

    public static extractUsername = (token: string) => UserLS.jwtHelper.decodeToken(token).sub;

    public static extractToken = (token: string) => token.substring(Constants.SETE);
}
