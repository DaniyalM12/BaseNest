import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { UserFactoryService } from './user-factory.service';
import { UserServices } from './user-services.service';
import {CrmServicesModule} from "../../crm-services/crm-services.module";
import { JwtServicesModule } from '../passport/jwt';


@Module({
  imports: [DataServicesModule, CrmServicesModule,
    JwtServicesModule
  ],
  providers: [UserFactoryService, UserServices],
  exports: [UserFactoryService, UserServices],
})
export class UserServicesModule {}