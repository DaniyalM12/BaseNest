import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {CreateUserDto} from '../../core/dtos';
import {LocalAuthFactoryService, LocalAuthService,} from '../../services/use-cases/passport/local-auth';
import {BaseResponseDto} from '../../core/dtos/response/base-response.dto';
import {User} from '../../core/entities';
import {Roles} from "../../enums/roles.enums";

@Controller('auth')
export class LocalAuthController {
  constructor(
      private localAuthFactoryService: LocalAuthFactoryService,
      private localAuthService: LocalAuthService,
  ) {
  }


  @Post('register/:user')
  async register(@Param("user") user: string, @Body() registerUserDto: CreateUserDto) {
    const baseResponseDto: BaseResponseDto<User> = new BaseResponseDto();
    try {
      switch (user) {
        case Roles.DEALER : {
          const user = await this.localAuthFactoryService.createNewUser(registerUserDto,);
          const createdUser = await this.localAuthService.registerUser(user);
          baseResponseDto.successExecWithoutType(user);
          break;
        }
        case Roles.MERCHANT:{
          //merchant will have seperate fields and Dto and validation logic


          break;
        }
        case Roles.SERVICE_PROVIDER:{
          //SP will have seperate fields and Dto and validation logic


          break;
        }
        default : {
          baseResponseDto.errorExec(new Error("Invalid Request"));
          break;
        }

      }
    } catch (error) {
      // report and log error
      baseResponseDto.errorExec(error);
    }


  return   baseResponseDto.disposeResponse();

  }


  // @Post('merchant')
  // async merchant(@Body() merchantUserDto: CreateUserDto) {
  //   return await this.register(merchantUserDto);
  // }
  // @Post('dealer')
  // async dealer(@Body() dealerUserDto: CreateUserDto) {
  //   return await this.register(dealerUserDto);
  // }
  // @Post('serviceprovider')
  // async serviceprovider(@Body() serviceProviderUserDto: CreateUserDto) {
  //   return await this.register(serviceProviderUserDto);
  // }

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
