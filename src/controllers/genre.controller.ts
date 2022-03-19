import {Body, Controller, Post} from '@nestjs/common';
import {GenreFactoryService, GenreServices} from "../services/use-cases/genre";
import {CreateGenreDto, CreateGenreResponseDto} from "../core/dtos";

@Controller('api/genre')
export class GenreController {
    constructor(
        private genreService: GenreServices,
        private genreFactoryService: GenreFactoryService
    ) {
    }

    @Post()
    async create(@Body() genreDto: CreateGenreDto) {
        const createGenreResponse = new CreateGenreResponseDto();
        try {
            const genre = this.genreFactoryService.createNewGenre(genreDto);
            const createdAuthor = await this.genreService.createGenre(genre);

            createGenreResponse.success = true;
            createGenreResponse.createdBook = createdAuthor;
        } catch (error) {
            // report and log error
            createGenreResponse.success = false;
        }

        return createGenreResponse;
    }
}
