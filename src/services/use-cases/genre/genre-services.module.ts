import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import {CrmServicesModule} from "../../crm-services/crm-services.module";
import {GenreFactoryService} from "./genre-factory.service";
import {GenreServices} from "./genre-services.service";

@Module({
    imports: [DataServicesModule, CrmServicesModule],
    providers: [GenreFactoryService,GenreServices],
    exports: [GenreFactoryService, GenreServices],
})
export class GenreServicesModule {}
