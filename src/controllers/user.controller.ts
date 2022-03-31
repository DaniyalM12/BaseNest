import {Controller, Get} from '@nestjs/common';
import {UserServices} from "../services/use-cases/user";

@Controller('api/user')
export class UserController {

    constructor(
        private userService: UserServices,
        // private userFactoryService: UserFactoryService,
    ) {

    }

    @Get()
    async getUsers() {
        return await this.userService.fetchUsers();
    }



}

