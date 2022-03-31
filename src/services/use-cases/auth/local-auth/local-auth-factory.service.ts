import {Injectable} from "@nestjs/common";
import {CreateUserDto, UpdateUserDto} from "../../../../core/dtos";
import {User} from "../../../../core/entities";


@Injectable()
export class LocalAuthFactoryService {
    createNewUser(createUserDto: CreateUserDto) {
        const newUser = new User();
        newUser.email = createUserDto.email;
        newUser.name = createUserDto.name;
        newUser.password = createUserDto.password;
        newUser.number = createUserDto.number;
        newUser.location = createUserDto.location;
        newUser.description = createUserDto.description;
        newUser.url = createUserDto.url;
        newUser.image = createUserDto.image;
        return newUser;
    }

    updateUser(updateUserDto: UpdateUserDto) {
        const newUser = new User();
        newUser.email = updateUserDto.email;
        newUser.name = updateUserDto.name;
        newUser.password = updateUserDto.password;
        newUser.number = updateUserDto.number;
        newUser.location = updateUserDto.location;
        newUser.description = updateUserDto.description;
        newUser.url = updateUserDto.url;
        newUser.image = updateUserDto.image;
        return newUser;
    }
}
