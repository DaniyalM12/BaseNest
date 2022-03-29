import {Body, Controller, Get, Post,Param,UseGuards} from '@nestjs/common';
import {UserFactoryService, UserServices} from "../services/use-cases/user";
import {CreateUserDto, CreateUserResponseDto} from "../core/dtos";
import { JwtAuthGuard } from 'src/services/use-cases/passport/jwt';


@Controller('api/user')
export class UserController {

    constructor(
        private userService: UserServices,
        private userFactoryService: UserFactoryService,
    ) {

    }   
    
    @Get()
    @UseGuards(JwtAuthGuard)
    async getUsers() {
        return await this.userService.fetchUsers();
    }

   
    @Post('login')
    async loginUser(@Body() userDto: CreateUserDto) {
        return await this.userService.loginUsers(userDto);
    }

    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        const createUserResponse = new CreateUserResponseDto();
        try {
            const user = this.userFactoryService.createNewUser(userDto);
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

