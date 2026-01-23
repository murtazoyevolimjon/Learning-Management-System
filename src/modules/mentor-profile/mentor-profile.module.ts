import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { MentorProfileController } from './mentor-profile.controller';
import { MentorProfileService } from './mentor-profile.service';

@Module({
  controllers: [MentorProfileController],
  providers: [MentorProfileService, PrismaService, ConfigService],
  exports: [MentorProfileService]
})
export class MentorProfileModule { }