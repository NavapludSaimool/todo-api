// import { Injectable, Inject } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}
//   async getTable(name: string): Promise<any[]> {
//     return await this.sql(`SELECT * FROM ${name}`);
//   }
// }

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string{
    return 'Something has returned'
  }
}
