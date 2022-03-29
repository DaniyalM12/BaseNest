import { Module } from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            secret: 'process.env.SECRET',
            signOptions: {expiresIn: '1d'}
        })
    ],
    exports: [JwtModule.register({
        secret: 'process.env.SECRET',
        signOptions: {expiresIn: '1d'}
    })],
})
export class JwtServicesModule {}
