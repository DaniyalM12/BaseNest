import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtStrategy,
        JwtModule.register({
            secret: 'process.env.SECRET',
            signOptions: {expiresIn: '1d'}
        })
    ],
    exports: [JwtStrategy,JwtModule.register({
        secret: 'process.env.SECRET',
        signOptions: {expiresIn: '1d'}
    })],
})
export class JwtServicesModule {}
