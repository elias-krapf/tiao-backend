import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserEntity} from "../../entity/user/user.entity";
import {UserService} from "../../entity/user/user.service";

@Injectable()
export class AuthorizationService {

    constructor(private jwtService: JwtService, private userService: UserService) {
    }

    async validate(mailAddress: string, password: string) {
        const user: UserEntity = await this.userService.getCustomerByMailAddress(mailAddress);
        if (user && user.password === password) {
            const { password, ...attributes } = user;
            return attributes;
        }

        return null;
    }

    async generateJwt(user: any) {
        const payload = {mailAddress: user.mailAddress, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}