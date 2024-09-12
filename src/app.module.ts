import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TodoModule, 
    ConfigModule.forRoot({
      isGlobal: true, 
    }), 
    TypeOrmModule.forRoot({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT as unknown as number,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATA,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    ssl: {
        rejectUnauthorized: false,  
      },
    synchronize: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
