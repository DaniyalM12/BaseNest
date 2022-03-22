import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthorFactoryService, AuthorServices} from "../services/use-cases/author";
import {CreateAuthorDto} from "../core/dtos";
import {CreateAuthorResponseDto} from "../core/dtos";

@Controller('api/author')
export class AuthorController {

    constructor(
        private authorService: AuthorServices,
        private authorFactoryService: AuthorFactoryService,
    ) {

    }

    @Get()
   async getAuthors(){
        return await this.authorService.fetchAuthors();
    }

    @Post()
    async createAuthor(@Body() authorDto: CreateAuthorDto) {
        const createAuthorResponse = new CreateAuthorResponseDto();
        try {
            const author = this.authorFactoryService.createNewAuthor(authorDto);
            const createdAuthor = await this.authorService.createAuthor(author);

            createAuthorResponse.success = true;
            createAuthorResponse.createdBook = createdAuthor;
        } catch (error) {
            // report and log error
            createAuthorResponse.success = false;
        }

        return createAuthorResponse;
    }

}
