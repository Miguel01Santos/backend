import { Inject, Injectable } from '@nestjs/common';
import { error } from 'console';
import { throwError } from 'rxjs';
import { UsuarioDto } from 'src/dto/model';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';


@Injectable()
export class UsersService {
    
    @Inject()
    private readonly jwtService : JwtService;


    async login(usuario : UsuarioDto): Promise<any>{
        //simulando usuario a fim de testes
            const usuariovalido = {
                username : 'Miguel01Santos',
                password : '34625096'
            };

            //teste de validação
            if (usuario.username === usuariovalido.username && usuario.password === usuariovalido.password) 
                {
                return { message: 'Autenticação bem-sucedida', token: 'seu token'};
            } 
            else{
                throw new error('Credenciais invalidas');
            }

            const payloud = {sub: usuario.username};

            return {access_token: await this.jwtService.signAsync(payloud)};
    }
}
