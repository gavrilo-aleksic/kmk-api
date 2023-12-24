import { Module } from '@nestjs/common';
import { SettingsModule } from '../settings/Settings.module';
import { QueryService } from './services/query.service';
import { QueryController } from './controllers/query.controller';
import { UsageRepository } from './repositories/usage.repository';
import { BaseRepository } from './repositories/basic.repository';

@Module({
  imports: [SettingsModule],
  controllers: [QueryController],
  providers: [QueryService, UsageRepository, BaseRepository],
  exports: [],
})
export class QueriesModule {}
