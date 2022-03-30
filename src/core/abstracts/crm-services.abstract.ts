import {User} from '../entities';
export abstract class ICrmServices  {
    abstract userAdded(user: User): Promise<boolean>;
}
