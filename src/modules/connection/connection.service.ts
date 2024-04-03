import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { env } from '../../shared/config/env';

@Injectable()
export class ConnectionService {
  async onModuleInit() {
    await mongoose.connect(env.dbURL).then(() => {
      console.log('Connection to MongoDB successfully established!');
    });
  }
}
