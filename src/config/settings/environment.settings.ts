import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'dev',
  Production = 'prod',
}

export const ENVIRONMENT_KEYS = {
  DATABASE_TYPE: 'DATABASE_TYPE',
  DATABASE_HOST: 'DATABASE_HOST',
  DATABASE_PORT: 'DATABASE_PORT',
  DATABASE_USERNAME: 'DATABASE_USERNAME',
  DATABASE_PASSWORD: 'DATABASE_PASSWORD',
  DATABASE_NAME: 'DATABASE_NAME',
  ENV: 'ENV',
  GOOGLE_CLIENT_ID: 'GOOGLE_CLIENT_ID',
  GOOGLE_SECRET: 'GOOGLE_SECRET',
  JWT: 'JWT',
  AWS_S3_KEY_ID: 'AWS_S3_KEY_ID',
  AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY',
  AWS_S3_BUCKET_NAME: 'AWS_S3_BUCKET_NAME',
  FRONTEND_APP_ROOT: 'FRONTEND_APP_ROOT',
  API_BASE_URL: 'API_BASE_URL',
  ENABLE_DEEP_LOGGING: 'ENABLE_DEEP_LOGGING',
  MAIL_USER_NAME: 'MAIL_USER_NAME',
  MAIL_PASSWORD: 'MAIL_PASSWORD',
} as const;

class EnvironmentVariables {
  @IsEnum(Environment)
  ENV: Environment;
  @IsNumber()
  DATABASE_PORT: number;
  @IsString()
  DATABASE_HOST: string;
  @IsString()
  DATABASE_USERNAME: string;
  @IsString()
  DATABASE_PASSWORD: string;
  @IsString()
  DATABASE_NAME: string;
  @IsString()
  JWT: string;
}

export const validateEnvironment = (config: Record<string, unknown>) => {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
};

export const getEnvFilePath = (): string => {
  return `.env`.trim().replace(' ', '');
};
