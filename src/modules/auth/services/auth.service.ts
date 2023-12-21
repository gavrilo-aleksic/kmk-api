import { HttpException, Injectable } from '@nestjs/common';
import { AppUserJWT } from '../auth.types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ENVIRONMENT_KEYS } from 'src/config/settings/environment.settings';
import { UserRepository } from '../repositories/user.repository';
import { LoginUserDTO } from '../entities/User.dto';
import { UserModel } from '../entities/User';
import { createJWTExpirationDate, validatePassword } from '../auth.utils';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(
    { username, password }: LoginUserDTO,
    rememberMe?: boolean,
  ): Promise<{ accessToken: string }> {
    const user = await this.userRepository.getOneByUsername(username);
    if (!user) {
      throw new HttpException('Not Found', 404);
    }

    if (!validatePassword(password, user.password)) {
      throw new HttpException('Invalid Password', 404);
    }
    const jwt = this.generateJwt(
      { id: user.id, username: user.username },
      rememberMe,
    );
    return {
      accessToken: jwt,
    };
  }

  generateJwt(
    payload: Pick<AppUserJWT, 'username' | 'id'>,
    longExpiration?: boolean,
  ): string {
    const content: AppUserJWT = {
      id: payload.id,
      username: payload.username,
      exp: createJWTExpirationDate(longExpiration),
    };

    return this.jwtService.sign(content, {
      secret: this.configService.get<string>(ENVIRONMENT_KEYS.JWT),
    });
  }

  async getUser(id: string): Promise<UserModel> {
    const user = await this.userRepository.getOneById(id);

    if (!user) throw new HttpException('Not Found', 400);
    return user;
  }
}
