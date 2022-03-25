import {Injectable} from '@nestjs/common';
import {CreateUserDto, UpdateUserDto} from "../../../core/dtos";
import {User} from "../../../core/entities";

@Injectable()
export class UserFactoryService {
    createNewUser(createUserDto: CreateUserDto) {
        const newUser = new User();
        newUser.email = createUserDto.email;
        newUser.password = createUserDto.password;

        return newUser;
    }

    updateUser(updateUserDto: UpdateUserDto) {
        const newUser = new User();
        newUser.email = updateUserDto.email;
        newUser.password = updateUserDto.password;
        return newUser;

    }
}
