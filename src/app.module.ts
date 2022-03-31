import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {DataServicesModule} from './services/data-services/data-services.module';
import {CrmServicesModule} from './services/crm-services/crm-services.module';
import {ConfigModule} from "@nestjs/config";
import configuration from "../config/configuration";
import {LocalAuthModule} from "./services/use-cases/auth/local-auth/local-auth-module.module";
import {LocalAuthController} from "./controllers/auth";

@Module({
  imports: [
    ConfigModule.forRoot({load: [configuration]}),
    DataServicesModule,
    CrmServicesModule,
    LocalAuthModule
  ],
  controllers: [
    LocalAuthController,
  ],
  providers: [
    AppService,

  ],
})
export class AppModule {
}
