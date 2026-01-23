import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VericationService } from './verification.service';
import { SendOtpDto } from './dto/send-otp.verification.dto';
import { IsPublic } from 'src/common/decorator/is-publik.decorator';
import { CreateVericationDto } from './dto/register.verification.dto';

@ApiTags('Verification')
@Controller('verification')
export class VericationController {
  constructor(private readonly vericationService: VericationService) { }

  @IsPublic()
  @Post('send-otp')
  async sendOtp(@Body() dto: SendOtpDto) {
    return this.vericationService.sendOtp(dto.type, dto.phone);
  }

  @IsPublic()
  @Post('verify-otp')
  async verifyOtp(@Body() dto: CreateVericationDto) {
    return this.vericationService.verifyOtp(dto);
  }
}