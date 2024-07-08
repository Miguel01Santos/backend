import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsuarioDto } from 'src/dto/model';

@Controller('auth')
export class UsersController {
    constructor(private authService : UsersService){}

    @Post('login')
    async login(@Body() usuario: UsuarioDto){
        return this.authService.login(usuario);
    }

    @Post('register')
    async register(@Body() usuario: UsuarioDto){
        return this.authService.register(usuario);
    }
}



