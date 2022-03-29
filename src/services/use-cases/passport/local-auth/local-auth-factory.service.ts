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
        return newUser;
    }

    updateUser(updateUserDto: UpdateUserDto) {
        const newUser = new User();
        newUser.email = updateUserDto.email;
        newUser.name = updateUserDto.name;
        newUser.password = updateUserDto.password;
        return newUser;
    }
}
