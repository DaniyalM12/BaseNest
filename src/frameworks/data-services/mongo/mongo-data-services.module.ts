import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {IDataServices} from '../../../core';
import {User, UserSchema} from './models';
import {MongoDataServices} from './mongo-data-services.service';
import {ConfigModule} from "@nestjs/config";



@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema},
        ]),
        MongooseModule.forRoot(process.env.MONGO_URL),
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
