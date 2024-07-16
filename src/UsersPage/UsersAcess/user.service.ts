import { Injectable, Inject } from '@nestjs/common';
import { UsuarioDto } from '../Model.dto/interface.userdto';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common'; //excessão para retorno de erro caso usuario seja invalido na hora do login
import { UserRepository } from '../MongoDB/Repository/RepositoryMongo';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from './user.module';

@Injectable()
export class UserService {

    constructor(private readonly usersRepository : UserRepository,
    ) {}

    @Inject()
    private readonly jwtService : JwtService;
    private readonly jwtStrategy : JwtStrategy

    /*async login(usuario : UsuarioDto): Promise<any>{
        console.log('o usuario chegou no servidor backend')
        
        if (usuario.username === 'UsuarioTeste01' &&  usuario.password === '01020304'){

            // Criar o payload para o token JWT
            const payload = {sub: usuario.username};
            console.log(payload)


            // Gerar o token JWT com base no payload
            const access_token = this.jwtService.signAsync(payload);
            console.log(access_token)


            // Retornar o token JWT para o cliente
            return {access_token};

        }else{
            console.log('usuario invalido')
            throw new UnauthorizedException('Credenciais inválidas');
        }
            
            

    }*/

        /*async login(usuario : UsuarioDto): Promise<any>{
            console.log('o usuario chegou no servidor backend, suas credenciais serão validadas')
            if (usuario.username === 'UsuarioTeste01' &&  usuario.password === '01020304'){
    
                // Criar o payload para o token JWT
                const payload = {sub: usuario.username};
                console.log(payload)
    
    
                // Gerar o token JWT com base no payload
                const access_token = this.jwtService.signAsync(payload);
                console.log(access_token)

    
    
                // Retornar o token JWT para o cliente
                return {access_token};
    
            }else{
                console.log('usuario invalido')
                throw new UnauthorizedException('Credenciais inválidas');
            }
                
                
    
        }*/


    async login(usuario : UsuarioDto): Promise<any>{
        

        if (usuario.username === 'UsuarioTeste01' &&  usuario.password === '01020304'){

        }else{
            console.log('usuario invalido')
            throw new UnauthorizedException('Credenciais inválidas');
            }
        }



    async register(cadastro : UsuarioDto): Promise<any>{
       return this.usersRepository.register(cadastro);
    }
}
