import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EVerificationTypes } from 'src/common/types/verification.types';

export class SendOtpDto {
    @ApiProperty({ enum: EVerificationTypes })
    @IsEnum(EVerificationTypes)
    type: EVerificationTypes

    @ApiProperty({ example: '998997776655' })
    @IsString()
    @IsNotEmpty()
    phone: string;
}

export class VerifyOtpDto {
    @ApiProperty({ example: '998997776655' })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    @IsNotEmpty()
    otp: string;
}
