import {Author, Book, Genre,User} from '../entities';

export abstract class ICrmServices  {
    abstract bookAdded(book: Book): Promise<boolean>;
    abstract authorAdded(author: Author): Promise<boolean>;
    abstract userAdded(user: User): Promise<boolean>;
    abstract authorGenre(author: Genre): Promise<boolean>;
}
