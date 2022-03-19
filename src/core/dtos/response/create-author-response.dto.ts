import {Author} from '../../entities';

export class CreateAuthorResponseDto {
    success: boolean;
    createdBook: Author;
}
