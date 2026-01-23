import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class EditPhoneDto {
    @ApiProperty({ example: "+998997776655" })
    @IsString()
    oldPhone: string

    @ApiProperty({ example: "+998997776655" })
    @IsString()
    newPhone: string

    @ApiProperty({ example: 'xxxxxx' })
    @IsString()
    otp: string
}