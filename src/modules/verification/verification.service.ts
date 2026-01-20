import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendOtpDto, VerifyOtpDto } from '../users/dto/verify.dto';
import { RedisService } from '../../common/redis/redis.service';
import { SmsService } from '../../common/services/sms.service';
import { EVerificationTypes } from '../../common/types/verification.types';
import { generateOtp } from '../../common/core/random';

@Injectable()
export class VerificationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly smsService: SmsService,
  ) { }

  private getKey(
    type: EVerificationTypes,
    phone: string,
    confirmation?: boolean,
  ) {
    const storeKeys: Record<EVerificationTypes, string> = {
      [EVerificationTypes.REGISTER]: 'reg_',
      [EVerificationTypes.RESET_PASSWORD]: 'respass_',
      [EVerificationTypes.EDIT_PHONE]: 'edph_',
    };
    let key = storeKeys[type];
    if (confirmation) key += 'cfm_';
    key += phone;
    return key;
  }

  private async throwIfUserExists(phone: string) {
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (user)
      throw new HttpException('Phone already used', HttpStatus.BAD_REQUEST);
    return user;
  }

  private getMessage(type: EVerificationTypes, otp: string) {
    switch (type) {
      case EVerificationTypes.REGISTER:
        return `Fixoo platformasidan ro'yxatdan o'tish uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`;

      case EVerificationTypes.RESET_PASSWORD:
        return `Fixoo platformasida parolingizni tiklash uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`;

      case EVerificationTypes.EDIT_PHONE:
        return `Fixoo platformasida telefoningizni o'zgartirish uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`;
    }
  }

  async sendOtp(payload: SendOtpDto) {
    const { type, phone } = payload;
    const key = this.getKey(type, phone);

    const existing = await this.redis.get(key);
    if (existing)
      throw new HttpException('OTP already sent', HttpStatus.BAD_REQUEST);

    if (type === EVerificationTypes.REGISTER) {
      await this.throwIfUserExists(phone);
    }

    const otp = generateOtp();
    await this.redis.set(key, otp, 600); // 10 minute
    await this.smsService.sendSMS(this.getMessage(type, otp), phone);

    return { message: 'OTP sent successfully' };
  }

  async verifyOtp(payload: VerifyOtpDto) {
    const { phone, otp } = payload;
    const key = this.getKey(EVerificationTypes.REGISTER, phone);

    const storedOtp = await this.redis.get(key);
    if (!storedOtp)
      throw new HttpException('OTP expired', HttpStatus.BAD_REQUEST);
    if (storedOtp !== otp)
      throw new HttpException('Invalid OTP', HttpStatus.BAD_REQUEST);

    await this.prisma.user.update({
      where: { phone },
      data: { isVerified: true },
    });

    await this.redis.delete(key);
    return { message: 'User verified successfully' };
  }
}
