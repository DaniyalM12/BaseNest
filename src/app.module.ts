import {Module} from '@nestjs/common';
import {
  AppController,
  GoogleAuthController,
  UserController
} from './controllers';
import {AppService} from './app.service';
import {DataServicesModule} from './services/data-services/data-services.module';
import {CrmServicesModule} from './services/crm-services/crm-services.module';
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
    UserServicesModule,
    StrategyModule,
    LocalAuthModule
  ],
  controllers: [
    AppController,
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
