import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASK') private task: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): any {
    const app_key = this.configService.app.key;
    const DB_PORT = this.configService.database.DB_PORT;
    return {
      message: 'Hello World!',
      task: DB_PORT,
      task2: this.task,
    };
  }
}
