import {Injectable} from '@nestjs/common';
import {ICrmServices, IDataServices} from "../../../core/abstracts";
import {Genre} from "../../../core/entities";

@Injectable()
export class GenreServices {
    constructor(
        private dataServices: IDataServices,
        private crmServices: ICrmServices,
    ) {
    }


    async createGenre(author: Genre): Promise<Genre> {
        try {
            // call to our dependencies
            const createdGenre = await this.dataServices.genres.create(author);
            await this.crmServices.authorGenre(createdGenre);

            return createdGenre;
        } catch (error) {
            throw error;
        }
    }
}
