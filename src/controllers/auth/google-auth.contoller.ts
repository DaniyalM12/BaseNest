import {Controller, Get, Req, UseGuards} from "@nestjs/common";
import {GoogleAuthService, GoogleStrategyService} from "../../services/use-cases/passport";
import {AuthGuard} from "@nestjs/passport";


@Controller('auth')
export class GoogleAuthController {
    constructor(
        private googleStrategyService: GoogleStrategyService,
        private googleAuthService:GoogleAuthService
    ) {
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req){
        return this.googleAuthService.googleLogin(req.user)
    }
}
