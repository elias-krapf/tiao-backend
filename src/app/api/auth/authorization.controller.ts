import {Controller, Post, Request, UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {AuthorizationService} from "./authorization.service";

@Controller()
export class AuthorizationController {

    constructor(private authorizationService: AuthorizationService) {
    }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() request) {
        return this.authorizationService.generateJwt(request.user);
    }

}