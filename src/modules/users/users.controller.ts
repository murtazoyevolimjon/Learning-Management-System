import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { IS_PUBLIC_KEY, IsPublic } from 'src/common/decorator/is-publik.decorator';
import { RegisterUserDto } from './dto/register.dto';
import { VerifyOtpDto } from './dto/verify.dto';
import { LoginUserDto } from './dto/login.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @IsPublic()
  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    return this.usersService.register(dto)
  }

  @IsPublic()
  @Post('verify')
  async verify(@Body() dto: VerifyOtpDto) {
    return this.usersService.verify(dto)
  }

  @IsPublic()
  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    return this.usersService.login(dto)
  }

  @ApiBearerAuth()
  @Get('profile/:id')
  async getProfile(@Param('id') id: string) {
    return this.usersService.getProfile(parseInt(id))
  }
}
