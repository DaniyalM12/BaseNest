import {Body, Controller, Get, Post,Param,UseGuards} from '@nestjs/common';
import {UserFactoryService, UserServices} from "../services/use-cases/user";
import {CreateRegisterDto, CreateUserResponseDto} from "../core/dtos";

@Controller('api/user')
export class UserController {

    constructor(
        private userService: UserServices,
        private userFactoryService: UserFactoryService,
    ) {

    }   

    @Get()
    async getUsers() {
        return await this.userService.fetchUsers();
    }

   
    @Post('login')
    async loginUser(@Body() registerDto: CreateRegisterDto) {
        return await this.userService.loginUsers(registerDto);
    }

    @Post()
    async createUser(@Body() registerDto: CreateRegisterDto) {
        const createUserResponse = new CreateUserResponseDto();
        try {
            const user = this.userFactoryService.createNewUser(registerDto);
            const createdUser = await this.userService.createUser(user);

            createUserResponse.success = true;
            createUserResponse.createdUser = createdUser;
        } catch (error) {
            // report and log error
            createUserResponse.success = false;
        }

        return createUserResponse;
    }

}

