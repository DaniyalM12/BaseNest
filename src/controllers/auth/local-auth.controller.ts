import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../../core/dtos';
import {
  LocalAuthFactoryService,
  LocalAuthService,
} from '../../services/use-cases/passport/local-auth';
import { BaseResponseDto } from '../../core/dtos/response/base-response.dto';
import { User } from '../../core/entities';
import { Roles } from '../../enums/roles.enums';
import {ValidationPipe} from "../../pipes";

@Controller('auth')
export class LocalAuthController {
  constructor(
    private localAuthFactoryService: LocalAuthFactoryService,
    private localAuthService: LocalAuthService,
  ) {}

  @Post('register/:user')
  async register(
    @Param('user') user: string,
    @Body(new ValidationPipe()) registerUserDto: CreateUserDto,
  ) {
    const baseResponseDto: BaseResponseDto<User> = new BaseResponseDto();
    try {
      switch (user) {
        case Roles.DEALER: {
          const user = await this.localAuthFactoryService.createNewUser(
            registerUserDto,
          );
          const createdUser = await this.localAuthService.registerUser(user,Roles.DEALER);
          baseResponseDto.successExecWithoutType(user);

          break;
        }
        case Roles.MERCHANT: {
          //merchant will have seperate fields and Dto and validation logic
          const user = await this.localAuthFactoryService.createNewUser(
            registerUserDto,
          );
          const createdUser = await this.localAuthService.registerUser(user,Roles.MERCHANT);
          baseResponseDto.successExecWithoutType(user);

          break;
        }
        case Roles.SERVICE_PROVIDER: {
          //SP will have seperate fields and Dto and validation logic
          const user = await this.localAuthFactoryService.createNewUser(
            registerUserDto,
          );
          const createdUser = await this.localAuthService.registerUser(user,Roles.SERVICE_PROVIDER);
          baseResponseDto.successExecWithoutType(user);
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
  async login(@Body() authenticateRequest: CreateUserDto) {
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
