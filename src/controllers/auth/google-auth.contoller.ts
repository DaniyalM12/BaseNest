import {Controller} from "@nestjs/common";


@Controller('authy')
export class GoogleAuthController {
    constructor(
        // private googleStrategyService: GoogleStrategyService,
        // private googleAuthService:GoogleAuthService
    ) {
    }

    // @Get('google')
    // @UseGuards(AuthGuard('google'))
    // async googleAuth(@Req() req) {
    // }
    //
    // @Get('google/callback')
    // @UseGuards(AuthGuard('google'))
    // googleAuthRedirect(@Req() req){
    //     return this.googleAuthService.googleLogin(req.user)
    // }
}
