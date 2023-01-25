import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from "./common/logger/logger";
import {VersioningType} from "@nestjs/common";

(async function () {
    const app = await NestFactory.create(AppModule);

    app.enableCors()
    app.useLogger(app.get(Logger));
    app.enableVersioning({type: VersioningType.URI, defaultVersion: '1'});

    await app.listen(3000);
}());

