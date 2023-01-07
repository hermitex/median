import { PrismaClient } from '@prisma/client';
import { Injectable, INestApplication } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  async enablesShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
