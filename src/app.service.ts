import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './UsersPage/Model.dto/interface.userdto';


@Injectable()
export class AppService {

  
  getHello(): UsuarioDto {
    return {
      username: "MiguelSantos",
      password: "34625096",
    };
  }
}
