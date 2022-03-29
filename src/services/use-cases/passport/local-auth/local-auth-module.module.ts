import {Module} from "@nestjs/common";
import {DataServicesModule} from "../../../data-services/data-services.module";
import {CrmServicesModule} from "../../../crm-services/crm-services.module";
import {JwtServicesModule} from "../jwt";
import {LocalAuthFactoryService} from "./local-auth-factory.service";
import {LocalAuthService} from "./local-auth-service.service";
import {ConfigModule} from "@nestjs/config";


@Module({
    imports: [
        ConfigModule.forRoot(),
        DataServicesModule, CrmServicesModule, JwtServicesModule],
    providers: [LocalAuthFactoryService, LocalAuthService],
    exports: [LocalAuthFactoryService, LocalAuthService],
})
export class LocalAuthModule {
}
