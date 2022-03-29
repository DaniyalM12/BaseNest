import {Injectable} from "@nestjs/common";

import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool,} from 'amazon-cognito-identity-js';
import {User} from "../../../../core/entities";

@Injectable()
export class LocalAuthService {
    private userPool: CognitoUserPool;

    constructor() {
        this.userPool = new CognitoUserPool({
            UserPoolId: process.env.COGNITO_USER_POOL_ID,
            ClientId: process.env.COGNITO_CLIENT_ID+1,

        });
    }


    registerUser(registerUser: User) {
        const {name, email, password} = registerUser;
        return new Promise((resolve, reject) => {
            return this.userPool.signUp(
                name,
                password,
                [new CognitoUserAttribute({Name: 'email', Value: email})],
                null,
                (err, result) => {
                    if (!result) {
                        reject(err);
                    } else {
                        resolve(result.user);
                    }
                },


            );
        });
    }


    authenticateUser(user: User) {
        const {name, password} = user;

        const authenticationDetails = new AuthenticationDetails({
            Username: name,
            Password: password,
        });
        const userData = {
            Username: name,
            Pool: this.userPool,
        };

        const newUser = new CognitoUser(userData);

        return new Promise((resolve, reject) => {
            return newUser.authenticateUser(authenticationDetails, {
                onSuccess: result => {
                    resolve(result);
                },
                onFailure: err => {
                    reject(err);
                },
            });
        });
    }


}
