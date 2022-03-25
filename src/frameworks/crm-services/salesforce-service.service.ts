import {Injectable} from '@nestjs/common';
import {Author, Book, Genre,User} from '../../core/entities';
import {ICrmServices} from '../../core/abstracts';

@Injectable()
export class SalesforceService implements ICrmServices {
    bookAdded(book: Book): Promise<boolean> {
        // Implement salesforce api logic

        return Promise.resolve(true);
    }

    authorAdded(author: Author): Promise<boolean> {
        // Implement salesforce api logic

        return Promise.resolve(true);
    }
    userAdded(user: User): Promise<boolean> {
        // Implement salesforce api logic

        return Promise.resolve(true);
    }

    authorGenre(author: Genre): Promise<boolean> {
        // Implement salesforce api logic

        return Promise.resolve(true);
    }
}
