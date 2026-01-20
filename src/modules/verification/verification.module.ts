import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SmsService } from '../../common/services/sms.service';
import { RedisService } from '../../common/redis/redis.service';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';

@Module({
  controllers: [VerificationController],
  providers: [VerificationService, PrismaService, RedisService, SmsService, ConfigService],
})
export class VerificationModule { }
