import {Injectable} from '@nestjs/common';
import {User} from '../../core/entities';
import {ICrmServices} from '../../core/abstracts';

@Injectable()
export class SalesforceService implements ICrmServices {
   
    userAdded(user: User): Promise<boolean> {
        // Implement salesforce api logic

        return Promise.resolve(true);
    }
}
