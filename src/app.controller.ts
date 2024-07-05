import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataModel } from './dto/model';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataModel {
    return this.appService.getHello();
  }
}
