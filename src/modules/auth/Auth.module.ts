import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entities/User';
import { UserRepository } from './repositories/user.repository';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { SettingsModule } from '../settings/Settings.module';

@Module({
  imports: [SettingsModule, TypeOrmModule.forFeature([UserModel])],
  controllers: [AuthController],
  providers: [UserRepository, AuthService],
  exports: [],
})
export class AuthModule {}
