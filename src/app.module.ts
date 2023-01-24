import {Module} from '@nestjs/common';
import {LoggerModule} from "./common/logger/logger.module";
import {AppService} from "./app.service";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";
import {AppController} from "./app.controller";
import {APP_GUARD} from "@nestjs/core";

@Module({
    imports: [
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 60,
        }),
        LoggerModule
    ],
    controllers: [AppController],
    providers: [
        { //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
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
        AppService
    ],
})
export class AppModule {
}
