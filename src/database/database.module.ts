import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { neon } from '@neondatabase/serverless';
import { databaseProviders } from './database.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

// // Load Environment Variables
// config({
//   path: ['.env', '.env.production', '.env.local'],
// });

// const sql = neon(process.env.DATABASE_URL);

// const dbProvider = {
//   provide: 'POSTGRES_POOL',
//   useValue: sql,
// };

// @Module({
//   providers: [dbProvider],
//   exports: [dbProvider],
// })
// export class DatabaseModule {}