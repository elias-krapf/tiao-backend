import {Module} from '@nestjs/common';
import {LoggerModule} from "./common/logger/logger.module";
import {AppService} from "./app.service";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";
import {AppController} from "./app.controller";
import {APP_GUARD} from "@nestjs/core";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";

import configuration from "./common/config/config"
import {UserModule} from "./app/entity/user/user.module";
import {UserEntity} from "./app/entity/user/user.entity";
import {AuthorizationModule} from "./app/api/auth/authorization.module";
import {EnvironmentModule} from "./app/api/controller/environment/environment.module";

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 60,
        }),
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'abc',
            database: 'tiao',
            entities: [UserEntity],
            synchronize: true,
        }),
        LoggerModule,
        AuthorizationModule,
        UserModule,
        EnvironmentModule,
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
        AppService
    ],
})
export class AppModule {
}
