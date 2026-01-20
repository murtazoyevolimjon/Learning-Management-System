import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { UserRole } from '@prisma/client';

export class UpdateUserDto {
    @ApiPropertyOptional({ example: '+998909998877' })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiPropertyOptional({ example: 'newPassword8877' })
    @IsOptional()
    @IsString()
    password?: string;

    @ApiPropertyOptional({ example: 'Olimjon Murtazoyev' })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiPropertyOptional({ enum: UserRole })
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;

    @ApiPropertyOptional({ example: 'https://example.com/new-avatar.png' })
    @IsOptional()
    @IsString()
    image?: string
}
