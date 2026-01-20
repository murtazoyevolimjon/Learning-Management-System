import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { RedisModule } from './common/redis/redis.module';
import { ConfigModule } from '@nestjs/config';
import { VerificationModule } from './modules/verification/verification.module';

@Module({
  imports: [ModulesModule, PrismaModule, RedisModule, ConfigModule, VerificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
