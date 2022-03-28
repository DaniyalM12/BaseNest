import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../services/use-cases/Auth/cognito/auth.service';


@Controller('auth/cognito')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authenticateRequest: { name: string, password: string }) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}