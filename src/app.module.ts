import {Module} from '@nestjs/common';
import {AppController, AuthorController, BookController, GenreController} from './controllers';
import {AppService} from './app.service';
import {DataServicesModule} from './services/data-services/data-services.module';
import {CrmServicesModule} from './services/crm-services/crm-services.module';
import {AuthorServices, AuthorServicesModule} from './services/use-cases/author';
import {BookFactoryService, BookServicesModule} from './services/use-cases/book';
import {BookServices, GenreServices} from './services';
import {GenreFactoryService, GenreServicesModule} from "./services/use-cases/genre";

@Module({
  imports: [DataServicesModule,
    CrmServicesModule,
    AuthorServicesModule,
    BookServicesModule,
    GenreServicesModule],
  controllers: [
    AppController,
    AuthorController,
    GenreController,
    BookController],
  providers: [
    AppService,
    AuthorServices,
    BookFactoryService,
    BookServices,
    GenreFactoryService, GenreServices],
})
export class AppModule {
}
