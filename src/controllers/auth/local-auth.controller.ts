import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateRegisterDto, CreateLoginDto } from '../../core/dtos';
import { LocalAuthFactoryService, LocalAuthService, } from '../../services/use-cases/passport/local-auth';
import { BaseResponseDto } from '../../core/dtos/response/base-response.dto';
import { User } from '../../core/entities';
import { Roles } from '../../enums/roles.enums';
import { ValidationPipe } from "../../pipes";

@Controller('auth')
export class LocalAuthController {
    constructor(
        private localAuthFactoryService: LocalAuthFactoryService,
        private localAuthService: LocalAuthService,
    ) {
    }

    @Post('register/:user')
    async register(
        @Param('user') user: string,
        @Body(new ValidationPipe()) registerUserDto: CreateRegisterDto,
    ) {
        const baseResponseDto: BaseResponseDto<User> = new BaseResponseDto();
        const newUser = await this.localAuthFactoryService.createNewUser(
            registerUserDto,
        );
        try {

            switch (user) {
                case Roles.DEALER: {
                    const createdUser = await this.localAuthService.registerUser(newUser, Roles.DEALER);
                    baseResponseDto.successExecWithoutType(newUser);

                    break;
                }
                case Roles.MERCHANT: {
                    //merchant will have seperate fields and Dto and validation logic
                    const createdUser = await this.localAuthService.registerUser(newUser, Roles.MERCHANT);
                    baseResponseDto.successExecWithoutType(newUser);

                    break;
                }
                case Roles.SERVICE_PROVIDER: {
                    //SP will have seperate fields and Dto and validation logic
                    const createdUser = await this.localAuthService.registerUser(newUser, Roles.SERVICE_PROVIDER);
                    baseResponseDto.successExecWithoutType(newUser);
                    break;
                }
                default: {
                    baseResponseDto.errorExec(new Error('Invalid Request'));
                    break;
                }
            }
        } catch (error) {
            // report and log error
            baseResponseDto.errorExec(error);
        }

        return baseResponseDto.disposeResponse();
    }


    // for testing purpose to check routes authentication working or not
    @Get('test')
    @UseGuards(AuthGuard('jwt'))
    getHello(): string {
        return 'Authentication working successfully';
    }

    @Post('login')
    async login(@Body() authenticateRequest: CreateLoginDto) {
        const baseResponseDto: BaseResponseDto<User> = new BaseResponseDto();
        try {
            const payload = await this.localAuthService.authenticateUser(
                authenticateRequest,
            );
            baseResponseDto.successExecWithoutType(payload);
        } catch (e) {
            baseResponseDto.errorExec(e);
        }

        return baseResponseDto.disposeResponse();
    }
}