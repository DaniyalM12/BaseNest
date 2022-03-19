import {Author, Book, Genre} from '../entities';

export abstract class ICrmServices  {
    abstract bookAdded(book: Book): Promise<boolean>;
    abstract authorAdded(author: Author): Promise<boolean>;
    abstract authorGenre(author: Genre): Promise<boolean>;
}
