import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserRole } from '@prisma/client';
import { EVerificationTypes } from 'src/common/types/verification.types';

export class RegisterUserDto {
    @ApiProperty({ example: '998901234567' })
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({ example: 'password123' })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: 'John Doe' })
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty({ enum: UserRole, example: UserRole.STUDENT, required: false })
    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;

    @ApiProperty({ enum: EVerificationTypes, example: EVerificationTypes.REGISTER })
    @IsEnum(EVerificationTypes)
    type: EVerificationTypes;
}
