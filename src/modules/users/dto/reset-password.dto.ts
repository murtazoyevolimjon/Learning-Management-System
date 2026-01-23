import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class ResetPassword {
    @ApiProperty({ example: "+998997776655" })
    @IsString()
    phone: string


    @ApiProperty({ example: "123123123" })
    @IsString()
    password: string

    @ApiProperty({ example: "xxxxxx" })
    @IsString()
    otp: string

}