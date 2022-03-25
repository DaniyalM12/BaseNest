import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy, VerifyCallback} from 'passport-google-oauth20'


@Injectable()

export class GoogleStrategyService extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: "z5BYROvv8R6dlnaIt3W50a5m",
            callBackUrl: "http://localhost:3000/auth/google/callback",
            scope: ['email', 'profile']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const {name, emails, photos} = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null, user);

    }
}
