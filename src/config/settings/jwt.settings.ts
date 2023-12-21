import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { ENVIRONMENT_KEYS } from './environment.settings';

export const jwtSettings = async (
  configService: ConfigService,
): Promise<JwtModuleOptions> => {
  return {
    secret: configService.get<string>(ENVIRONMENT_KEYS.JWT),
  };
};
