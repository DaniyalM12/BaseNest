import {IsEmail, IsEmpty, IsNotEmpty, IsString,IsPhoneNumber} from 'class-validator';
import {PartialType} from '@nestjs/mapped-types';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()    
    number: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    description: string;

    @IsString()
    url: string;

    @IsString()
    image: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
}
