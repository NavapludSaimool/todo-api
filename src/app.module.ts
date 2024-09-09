import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [TodoModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
