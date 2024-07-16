import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioDto } from './UsersPage/Model.dto/interface.userdto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): UsuarioDto {
    return this.appService.getHello();
  }
}
