import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../MongoDB/Schema/SchemaMongo';
import { UserRepository } from '../MongoDB/Repository/RepositoryMongo';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';




@Module({
  imports : [MongooseModule.forFeature([{name : 'Users', schema : UserSchema}]), JwtModule],
  controllers: [UserController],
  providers : [UserService, UserRepository, JwtStrategy],
})
export class UserModule {}
