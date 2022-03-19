import {Injectable} from '@nestjs/common';
import {CreateGenreDto} from "../../../core/dtos";
import {Genre} from "../../../core/entities";

@Injectable()
export class GenreFactoryService {
    createNewGenre(createGenreDto: CreateGenreDto) {
        const newGenre = new Genre();
        newGenre.name = createGenreDto.name;
        return newGenre;
    }

    updateAuthor(createGenreDto: CreateGenreDto) {
        const newGenre = new Genre();
        newGenre.name = createGenreDto.name;
        return newGenre;

    }
}
