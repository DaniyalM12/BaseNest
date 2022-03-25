import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {IDataServices} from '../../../core';

import {Author, AuthorSchema, Book, BookSchema, Genre, GenreSchema,User,UserSchema} from './models';
import {MongoDataServices} from './mongo-data-services.service';
// const url = process.env.MONGO_URL || 'localhost';
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Author.name, schema: AuthorSchema},
            {name: Book.name, schema: BookSchema},
            {name: Genre.name, schema: GenreSchema},
            {name: User.name, schema: UserSchema},
        ]),
        MongooseModule.forRoot("mongodb://localhost:27017/rest-api"),
        // MongooseModule.forRoot(``),
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
