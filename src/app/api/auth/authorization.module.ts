import {Module} from "@nestjs/common";
import {AuthorizationController} from "./authorization.controller";
import {AuthorizationService} from "./authorization.service";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategy} from "./jwt.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JWT_SECRET} from "../../../common/firewall/jwt.secret";
import {UserModule} from "../../entity/user/user.module";

@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: JWT_SECRET.SECRET
    })],
    providers: [AuthorizationService, LocalStrategy, JwtStrategy],
    controllers: [AuthorizationController],
})
export class AuthorizationModule {
}