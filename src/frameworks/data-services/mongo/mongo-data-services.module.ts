import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {IDataServices} from '../../../core';

import {Author, AuthorSchema, Book, BookSchema, Genre, GenreSchema,} from './models';
import {MongoDataServices} from './mongo-data-services.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Author.name, schema: AuthorSchema},
            {name: Book.name, schema: BookSchema},
            {name: Genre.name, schema: GenreSchema},
        ]),
        MongooseModule.forRoot("mongodb://localhost:27017/rest-api"),
    ],
    providers: [
        {
            provide: IDataServices,
            useClass: MongoDataServices,
        },
    ],
    exports: [IDataServices],
})
export class MongoDataServicesModule {
}
