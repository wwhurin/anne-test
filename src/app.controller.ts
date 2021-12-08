import { Controller, Get } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService : AppService) {}

    @Get()
    getHello() : string {
        return this.appService.getHello();
    }

    @Get('test')
    getTest() : string {
        return "Test";
    }
}