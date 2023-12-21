import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseSettings from './config/settings/database.settings';
import {
  validateEnvironment,
  getEnvFilePath,
} from './config/settings/environment.settings';
import { AuthModule } from './modules/auth/Auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnvironment,
      envFilePath: getEnvFilePath(),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: databaseSettings,
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
