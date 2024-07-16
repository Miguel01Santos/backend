import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UsuarioDto} from "src/UsersPage/Model.dto/interface.userdto";
import { User } from "../Interface/InterfaceMongo";
import { Model } from "mongoose";
import { UserSchema } from "../Schema/SchemaMongo";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel('User') private readonly userModel : Model<User> 
    ){}


    async findOne(usuario : UsuarioDto): Promise<any>{
        console.log('Olá Mundo')
        
    }
    
    async register(cadastro : UsuarioDto): Promise <UsuarioDto>{
        const registerUser = new this.userModel(cadastro);
        return await registerUser.save()
        
    }

    /*constructor(@InjectModel('Users') private readonly userModel : Model<Users>){}

    async register(cadastro : UsuarioDto): Promise<UsuarioDto>{
        const registerUser = new this.userModel(cadastro);
        return await registerUser.save()
    }*/

}