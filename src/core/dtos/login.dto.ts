import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";

export class CreateLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;


}

export class UpdateLoginDto extends PartialType(CreateLoginDto) {
}