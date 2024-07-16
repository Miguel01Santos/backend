import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UsuarioDto } from '../Model.dto/interface.userdto';
import { HttpStatus, HttpException } from '@nestjs/common';


@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post('login')
    async login(@Body() usuario : UsuarioDto){
        console.log(`o usuario ${usuario.username} passou pelo controler com a senha ${usuario.password}`);
        return this.userService.login(usuario);
    }

    @Post('register')
    async register(@Body() cadastro: UsuarioDto){
        return console.log('backend recebeu a sua API')
        //return this.userService.register(usuario);
    }
}
