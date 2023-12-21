import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtSettings } from 'src/config/settings/jwt.settings';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: jwtSettings,
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [ConfigModule, JwtModule],
})
export class SettingsModule {}
