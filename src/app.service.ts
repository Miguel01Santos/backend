import { Injectable } from '@nestjs/common';
import { DataModel } from './dto/model';

@Injectable()
export class AppService {
  getHello(): DataModel {
    return {
      title: "Hello",
      text: "hello you",
    };
  }
}
