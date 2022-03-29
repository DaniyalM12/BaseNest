import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto} from "../../core/dtos";
import {LocalAuthFactoryService, LocalAuthService} from "../../services/use-cases/passport/local-auth";
import {BaseResponseDto} from "../../core/dtos/response/base-response.dto";
import {User} from "../../core/entities";


@Controller('auth/local')
export class LocalAuthController {
    constructor(
        private localAuthFactoryService: LocalAuthFactoryService,
        private localAuthService: LocalAuthService,

    ) {
    }


    @Post('register')
    async register(
        @Body() registerUserDto: CreateUserDto
    ) {
        const  baseResponseDto: BaseResponseDto<User> = new BaseResponseDto();
        try {
            const user = await this.localAuthFactoryService.createNewUser(registerUserDto);
            const createdUser = await this.localAuthService.registerUser(user);

            baseResponseDto.successExec(user);
        } catch (error) {
            // report and log error
            baseResponseDto.errorExec(error);
        }

        return baseResponseDto.disposeResponse();

    }

    @Post('login')
    async login(@Body() authenticateRequest: CreateUserDto) {
        const  baseResponseDto: BaseResponseDto<User> = new BaseResponseDto();
        try {
            const payload = await this.localAuthService.authenticateUser(authenticateRequest);
            baseResponseDto.successExecWithoutType(payload);

        } catch (e) {
            baseResponseDto.errorExec(e);
        }

        return baseResponseDto.disposeResponse();
    }
}
