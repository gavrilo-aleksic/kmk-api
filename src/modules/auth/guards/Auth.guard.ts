import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { ENVIRONMENT_KEYS } from 'src/config/settings/environment.settings';
import { AppUserJWT } from '../auth.types';

const extractJWTFromRequest = (req: Request) => {
  return req.headers.authorization || req.cookies.access_token;
};

@Injectable()
export class AuthGuardJwt implements CanActivate {
  constructor(
    public jwtService: JwtService,
    public configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractJWTFromRequest(request);
    if (!token) {
      throw new HttpException('Missing token', 401);
    }
    try {
      const payload = await this.jwtService.verifyAsync<AppUserJWT>(token, {
        secret: this.configService.get<string>(ENVIRONMENT_KEYS.JWT),
      });
      request['user'] = payload;
    } catch (e) {
      if (e instanceof jwt.TokenExpiredError) {
        throw new HttpException('Invalid token', 401);
      }
      throw new HttpException(`[server error], ${JSON.stringify(e)}`, 401);
    }
    return true;
  }

  extractTokenFromHeader(request: Request): string | undefined {
    return request.headers.authorization;
  }
}
