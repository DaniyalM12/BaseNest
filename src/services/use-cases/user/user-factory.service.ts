import {Injectable} from '@nestjs/common';
import {CreateRegisterDto, UpdateRegisterDto} from "../../../core/dtos";
import {User} from "../../../core/entities";

@Injectable()
export class UserFactoryService {
    createNewUser(createRegisterDto: CreateRegisterDto) {
        const newUser = new User();
        newUser.email = createRegisterDto.email;
        newUser.password = createRegisterDto.password;

        return newUser;
    }

    updateUser(updateRegisterDto: UpdateRegisterDto) {
        const newUser = new User();
        newUser.email = updateRegisterDto.email;
        newUser.password = updateRegisterDto.password;
        return newUser;

    }
}
