import { Injectable } from '@nestjs/common';
import {ICrmServices, IDataServices} from "../../../core/abstracts";
import {Author, Book} from "../../../core/entities";

@Injectable()
export class AuthorServices {
    constructor(
        private dataServices: IDataServices,
        private crmServices: ICrmServices,
    ) {}


    async createAuthor(author: Author): Promise<Author> {
        try {
            // call to our dependencies
            const createdAuthor = await this.dataServices.authors.create(author);
            await this.crmServices.authorAdded(createdAuthor);

            return createdAuthor;
        } catch (error) {
            throw error;
        }
    }
}
