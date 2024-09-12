import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
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
}