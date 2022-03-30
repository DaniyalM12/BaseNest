import {Injectable} from "@nestjs/common";

import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool,} from 'amazon-cognito-identity-js';
import {User} from "../../../../core/entities";

@Injectable()
export class LocalAuthService {
    private userPool: CognitoUserPool;

    constructor() {
        this.userPool = new CognitoUserPool({
            UserPoolId: process.env.COGNITO_USER_POOL_ID,
            ClientId: process.env.COGNITO_CLIENT_ID,
        });
    }


    registerUser(registerUser: User,type:string) {
        const attributeList = [];
        const {name, email, password,number,location,description,url,image} = registerUser;

        attributeList.push(new CognitoUserAttribute({Name: 'email', Value: email}));    
        attributeList.push(new CognitoUserAttribute({Name: 'phone_number', Value: number}));    
        attributeList.push(new CognitoUserAttribute({Name: 'address', Value: location}));    
        attributeList.push(new CognitoUserAttribute({Name: 'description', Value: description?description:""}));    
        attributeList.push(new CognitoUserAttribute({Name: 'type', Value: type}));    
        attributeList.push(new CognitoUserAttribute({Name: 'website', Value: url?url:""}));    
        attributeList.push(new CognitoUserAttribute({Name: 'picture', Value: image?image:""}));

        return new Promise((resolve, reject) => {
            return this.userPool.signUp(
                name,
                password,
                attributeList,
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
