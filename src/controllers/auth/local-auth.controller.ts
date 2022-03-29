import {BadRequestException, Body, Controller, Get, Post, Req, UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {CreateUserResponseDto, CreateUserDto} from "../../core/dtos";
import {LocalAuthFactoryService, LocalAuthService} from "../../services/use-cases/passport/local-auth";


@Controller('auth/local')
export class LocalAuthController {
    constructor(
        private localAuthFactoryService: LocalAuthFactoryService,
        private localAuthService: LocalAuthService
    ) {
    }


    @Post('register')
    async register(
        @Body() registerUserDto: CreateUserDto
    ) {
        const createdUserResponse = new CreateUserResponseDto();
        try {
            const user = await this.localAuthFactoryService.createNewUser(registerUserDto);
            const createdUser = await this.localAuthService.registerUser(user);

            createdUserResponse.success = true;
            createdUserResponse.createdUser = user;
        } catch (error) {
            // report and log error
            createdUserResponse.success = false;
        }

        return createdUserResponse;

    }

    @Post('login')
    async login(@Body() authenticateRequest: CreateUserDto) {
        try {
            return await this.localAuthService.authenticateUser(authenticateRequest);
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }
}
