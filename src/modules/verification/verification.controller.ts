import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { VerificationService } from './verification.service';
import { SendOtpDto, VerifyOtpDto } from '../users/dto/verify.dto';

@ApiTags('Verification')
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) { }

  @Post('send')
  @ApiOperation({ summary: 'string' })
  async sendOtp(@Body() dto: SendOtpDto) {
    return this.verificationService.sendOtp(dto)
  }

  @Post('verify')
  @ApiOperation({ summary: 'string' })
  async verifyOtp(@Body() dto: VerifyOtpDto) {
    return this.verificationService.verifyOtp(dto);
  }
}
