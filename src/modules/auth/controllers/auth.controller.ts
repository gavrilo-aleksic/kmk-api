import { Body, Controller, Get, Request, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppRequest } from '../auth.types';
import { LoginUserDTO } from '../entities/User.dto';
import { AuthService } from '../services/auth.service';

@Controller({ path: '' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Request() request: AppRequest,
    @Body() userCredentials: LoginUserDTO,
  ) {
    return this.authService.login(userCredentials, userCredentials.rememberMe);
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
  }
}
