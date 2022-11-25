import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: {
    name: process.env.DATABASE_NAME,
    DB_PORT: process.env.DB_PORT,
  },
  app: {
    key: process.env.APP_KEY,
  },
}));
