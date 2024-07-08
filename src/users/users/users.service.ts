import { Inject, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { error } from 'console';
import { throwError } from 'rxjs';
import { UsuarioDto } from 'src/dto/model';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';



@Injectable()
export class UsersService {
    private dataUsers: UsuarioDto[] = [{username: 'Miguel01Santos', password: '34625096'}]; // Array de usuários

    
    @Inject()
    private readonly jwtService : JwtService;


    async login(usuario : UsuarioDto): Promise<any>{
        
        const user = this.dataUsers;
        
        // Se o usuário não existir, lançar UnauthorizedException
        if (usuario) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        // Verifique se a senha está correta
        const isPasswordValid = (usuario.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciais inválidas');
        }
           
        const payloud = {sub: usuario.username};

        return {access_token: await this.jwtService.signAsync(payloud)};

    }

    async register(usuario: UsuarioDto): Promise<any>{
        
    }

}
