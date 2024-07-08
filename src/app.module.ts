import { Header, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users/users.module';
import { JwtModule} from '@nestjs/jwt';
import * as cors from 'cors';
import { MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    JwtModule.register({global: true,
    secret: process.env.SECRET_KEY || '',
    signOptions: { expiresIn: '86400s'},
  }),
  UsersModule,
  MongooseModule.forRoot('mongodb://localhost:27017'),
 ],
  controllers: [AppController],
  providers: [AppService],
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

//NÃO CONSEGUI RESOLVER O PROBLEMA DO CORS