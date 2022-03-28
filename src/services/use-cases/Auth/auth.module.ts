import { Module } from '@nestjs/common';
import { AuthService } from './cognito/auth.service';
import { AuthConfig } from './cognito/auth.config';

@Module({
  imports: [],
  providers: [AuthService, AuthConfig],
  exports: [AuthService, AuthConfig],
})
export class AuthModule {}
