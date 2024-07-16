import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule} from '@nestjs/jwt';
import * as cors from 'cors';
import { MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';
import { UserService } from './UsersPage/UsersAcess/user.service';
import { UserModule } from './UsersPage/UsersAcess/user.module';
import { UserRepository } from './UsersPage/MongoDB/Repository/RepositoryMongo';
import { JwtStrategy } from './UsersPage/UsersAcess/jwt.strategy';




@Module({
  imports: [ 

    ConfigModule.forRoot({
      isGlobal: true, // Torna ConfigService disponível globalmente
    }),
    
    JwtModule.register({
      secret: process.env.SECRET_KEY || 'SERCRET_KEY',
      signOptions: { expiresIn: '1h' },
  }),
  
  
  
  MongooseModule.forRoot('mongodb://localhost:27017'), UserModule ],
  controllers: [AppController],
  providers: [AppService, UserService, UserRepository,JwtStrategy],
})


export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors({
      Header: 'Access-Control-Allow-Origin',
      origin: 'http://localhost:4200', // URL do frontend Angular
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    })).forRoutes('*');
  }
}

