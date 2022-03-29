import { Module } from '@nestjs/common';
import {GoogleStrategyService} from "./google";
import {GoogleAuthService} from "./google";
@Module({
    imports: [        
    ],
    providers: [GoogleStrategyService,GoogleAuthService],
    exports: [GoogleStrategyService,GoogleAuthService],

})
export class StrategyModule {}
