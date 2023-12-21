import {
  Body,
  Controller,
  Get,
  Request,
  Post,
  Res,
  UseGuards,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { AppRequest } from '../auth.types';
import { LoginUserDTO } from '../entities/User.dto';
import { AuthService } from '../services/auth.service';
import { AuthGuardJwt } from '../guards/Auth.guard';
import {
  ApiBearerAuth,
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserModel } from '../entities/User';

@Controller({ path: '' })
@ApiCookieAuth()
@ApiTags('Autentikacija')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Prijavljivanje korisnika',
  })
  async login(
    @Request() request: AppRequest,
    @Res({ passthrough: true }) response: Response,
    @Body() userCredentials: LoginUserDTO,
  ) {
    const token = await this.authService.login(userCredentials);
    response.cookie('access_token', token.accessToken);
    return token;
  }

  @Get('user')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuardJwt)
  @ApiResponse({ type: UserModel })
  @ApiOperation({
    summary: 'Podaci o korisniku',
  })
  async userProfile(@Request() request: AppRequest) {
    const user = await this.authService.getUser(request.user.id);
    return user;
  }

  @ApiOperation({
    summary: 'Prekid sesije',
  })
  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
  }
}
