import {Controller, Get, HttpException, HttpStatus} from "@nestjs/common";

@Controller('/test')
export class AppController {

    @Get()
    public getTest(): any {
        return {test: 'abc'};
    }

}