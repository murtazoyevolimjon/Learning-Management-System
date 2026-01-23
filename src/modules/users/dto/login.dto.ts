import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
    @ApiProperty({ example: '+998997776655' })
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({ example: 'password77' })
    @IsNotEmpty()
    @IsString()
    password: string;
}

