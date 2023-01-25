import {Controller, Get} from "@nestjs/common";

@Controller('/api/environment')
export class EnvironmentController{

    @Get()
    public getEnvironmentInformation(){
        return 'asdf';
    }

}