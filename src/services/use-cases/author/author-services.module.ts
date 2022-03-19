import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { AuthorFactoryService } from './author-factory.service';
import { AuthorServices } from './author-services.service';
import {CrmServicesModule} from "../../crm-services/crm-services.module";

@Module({
  imports: [DataServicesModule, CrmServicesModule],
  providers: [AuthorFactoryService, AuthorServices],
  exports: [AuthorFactoryService, AuthorServices],
})
export class AuthorServicesModule {}
