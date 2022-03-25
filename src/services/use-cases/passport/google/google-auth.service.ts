import {Injectable} from "@nestjs/common";


@Injectable()
export class GoogleAuthService {
    googleLogin(user){
        if (!user){
            return 'No user from google';
        }

        return {
            message : 'User info from google',
            user: user
        }
    }
}
