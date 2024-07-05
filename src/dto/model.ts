
//interface apenas usada para teste de funcionalidade da porta 3000
export interface DataModel{
    title: string;
    text: string;
  }

//tipos dados aos valores dos usuario usados na autenticação 
export class UsuarioDto{
    username: string;
    password: string;
}