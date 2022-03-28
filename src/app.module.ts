import {Module} from '@nestjs/common';
import {AppController, AuthorController, BookController, GenreController, GoogleAuthContoller,AuthController} from './controllers';
import {AppService} from './app.service';
import {DataServicesModule} from './services/data-services/data-services.module';
import {CrmServicesModule} from './services/crm-services/crm-services.module';
import {AuthorServicesModule} from './services/use-cases/author';
import {BookServicesModule} from './services/use-cases/book';
import {GenreServicesModule} from "./services/use-cases/genre";
import {StrategyModule} from "./services/use-cases/passport";
import {AuthModule} from "./services/use-cases/Auth";
import {ConfigModule} from "@nestjs/config";
import configuration from "../config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({load: [configuration]}),
    DataServicesModule,
    CrmServicesModule,
    AuthorServicesModule,
    BookServicesModule,
    GenreServicesModule,
    StrategyModule,
    AuthModule
  ],
  controllers: [
    AppController,
    AuthorController,
    GenreController,
    BookController,
    GoogleAuthContoller,
    AuthController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {
}
