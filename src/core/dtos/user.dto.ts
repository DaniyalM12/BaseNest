import { IsEmail, IsEmpty, IsNotEmpty, IsString, IsPhoneNumber, } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";

export class CreateRegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    number: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    location: string;

    @ApiProperty()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsString()
    url?: string;

    @ApiProperty()
    @IsString()
    image?: string;
}

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {
}