import {Module} from '@nestjs/common';
import {
  AppController,
  AuthorController,
  BookController,
  GenreController,
  GoogleAuthController,
  UserController
} from './controllers';
import {AppService} from './app.service';
import {DataServicesModule} from './services/data-services/data-services.module';
import {CrmServicesModule} from './services/crm-services/crm-services.module';
import {AuthorServicesModule} from './services/use-cases/author';
import {BookServicesModule} from './services/use-cases/book';
import {GenreServicesModule} from "./services/use-cases/genre";
import {UserServicesModule} from "./services/use-cases/user";
import {StrategyModule} from "./services/use-cases/passport";
import {ConfigModule} from "@nestjs/config";
import configuration from "../config/configuration";
import {LocalAuthModule} from "./services/use-cases/passport/local-auth/local-auth-module.module";
import {LocalAuthController} from "./controllers/auth/local-auth.controller";

@Module({
  imports: [
    ConfigModule.forRoot({load: [configuration]}),
    DataServicesModule,
    CrmServicesModule,
    AuthorServicesModule,
    BookServicesModule,
    GenreServicesModule,
    UserServicesModule,
    StrategyModule,
    LocalAuthModule
  ],
  controllers: [
    AppController,
    AuthorController,
    GenreController,
    BookController,
    GoogleAuthController,
    LocalAuthController,
    UserController
  ],
  providers: [
    AppService,

  ],
})
export class AppModule {
}
