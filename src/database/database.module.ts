import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [],
  controllers: [],
//   providers: [
//     {
//       provide: 'APP_KEY',
//       useValue:
//         process.env.NODE_ENV === 'production'
//           ? process.env.APP_KEY_PROD
//           : process.env.APP_KEY,
//     },
//   ],
//   exports: ['APP_KEY'],
})
export class DatabaseModule {}
