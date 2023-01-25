import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {AuthorizationService} from "./authorization.service";
import {Strategy} from "passport-local";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authorizationService: AuthorizationService, private jwtService: JwtService) {
        super({usernameField: "mailAddress"});
    }

    async validate(mailAddress: string, password: string): Promise<any> {
        const user = await this.authorizationService.validate(mailAddress, password);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }

    async generateJWT(user: any) {
        const payload = { mailAddress: user.mailAddress, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }

}