import {Genre} from '../../entities';

export class CreateGenreResponseDto {
    success: boolean;
    createdBook: Genre;
}
