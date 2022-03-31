import { Injectable } from "@nestjs/common";
import { CreateRegisterDto, UpdateRegisterDto, CreateLoginDto, UpdateLoginDto } from "../../../../core/dtos";
import { User, Login } from "../../../../core/entities";


@Injectable()
export class LocalAuthFactoryService {
    createNewUser(createRegisterDto: CreateRegisterDto) {
        const newUser = new User();
        newUser.email = createRegisterDto.email;
        newUser.name = createRegisterDto.name;
        newUser.password = createRegisterDto.password;
        newUser.number = createRegisterDto.number;
        newUser.location = createRegisterDto.location;
        newUser.description = createRegisterDto.description;
        newUser.url = createRegisterDto.url;
        newUser.image = createRegisterDto.image;
        return newUser;
    }

    updateUser(updateRegisterDto: UpdateRegisterDto) {
        const newUser = new User();
        newUser.email = updateRegisterDto.email;
        newUser.name = updateRegisterDto.name;
        newUser.password = updateRegisterDto.password;
        newUser.number = updateRegisterDto.number;
        newUser.location = updateRegisterDto.location;
        newUser.description = updateRegisterDto.description;
        newUser.url = updateRegisterDto.url;
        newUser.image = updateRegisterDto.image;
        return newUser;
    }

    LoginUser(createLoginDto: CreateLoginDto) {
        const loginUser = new Login();
        loginUser.name = createLoginDto.name;
        loginUser.password = createLoginDto.password;
        return loginUser;
    }

    UpdateLoginUser(updateLoginDto: UpdateLoginDto) {
        const loginUser = new Login();
        loginUser.name = updateLoginDto.name;
        loginUser.password = updateLoginDto.password;
        return loginUser;
    }
}