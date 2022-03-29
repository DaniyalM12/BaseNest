import {IsEmail, IsEmpty, IsNotEmpty, IsString} from 'class-validator';
import {PartialType} from '@nestjs/mapped-types';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
}
