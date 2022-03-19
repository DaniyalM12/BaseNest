import {IsNotEmpty, IsString} from 'class-validator';
import {PartialType} from '@nestjs/mapped-types';

export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
}
