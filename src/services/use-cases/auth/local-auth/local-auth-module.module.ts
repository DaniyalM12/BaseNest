import {Module} from "@nestjs/common";
import {DataServicesModule} from "../../../data-services/data-services.module";
import {CrmServicesModule} from "../../../crm-services/crm-services.module";
import {LocalAuthFactoryService} from "./local-auth-factory.service";
import {LocalAuthService} from "./local-auth-service.service";
import {ConfigModule} from "@nestjs/config";
import { PassportModule } from '@nestjs/passport';
import { LocalJwtStrategy } from "./local-auth.strategy";

@Module({
    imports: [
        ConfigModule.forRoot(),
        // PassportModule.register({ defaultStrategy: 'jwt' }),
        DataServicesModule, CrmServicesModule],
    providers: [LocalAuthFactoryService, LocalAuthService,LocalJwtStrategy],
    exports: [LocalAuthFactoryService, LocalAuthService,LocalJwtStrategy],
})
export class LocalAuthModule {
}
