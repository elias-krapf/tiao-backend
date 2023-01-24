import {Controller, Get} from "@nestjs/common";

@Controller('/test')
export class AppController {

    @Get()
    public getTest(): string {
        return "asdfd";
    }

}