import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TodoModule, 
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }), 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: 'tododata_owner',
    password: '5xvJPE8huslV',
    database: 'tododata',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    ssl: {
        rejectUnauthorized: false,  // if you don't have a trusted certificate
      },
    synchronize: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
