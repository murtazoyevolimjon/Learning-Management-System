import { Module } from '@nestjs/common';
import { RedisModule } from 'src/common/redis/redis.module';
import { SmsService } from 'src/common/services/sms.service';
import { VericationController } from './verification.controller';
import { VericationService } from './verification.service';

@Module({
  imports: [RedisModule],
  controllers: [VericationController],
  providers: [VericationService, SmsService],
  exports: [VericationService],
})
export class VericationModule { }