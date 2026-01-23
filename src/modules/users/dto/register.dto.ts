import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsString, IsEnum, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ example: '+998997776655' })
    @IsString()
    phone: string

    @ApiProperty({ example: 'string' })
    @IsString()
    fullName: string

    @ApiProperty({ example: 'xxxxxx', minLength: 6 })
    @IsString()
    @MinLength(6)
    password: string

    @ApiProperty({ enum: UserRole, default: UserRole.STUDENT })
    @IsEnum(UserRole)
    role: UserRole = UserRole.STUDENT

    @ApiProperty({ example: 'http://example.com/image.jpg' })
    @IsOptional()
    @IsString()
    image?: string

    @ApiProperty({ example: 'xxxxxx' })
    @IsString()
    otp: string
}