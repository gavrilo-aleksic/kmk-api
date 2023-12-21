import { Module } from '@nestjs/common';
import { SettingsModule } from '../settings/Settings.module';
import { QueryService } from './services/Query.service';
import { QueryController } from './controllers/Query.controller';
import { UsageRepository } from './repositories/Usage.repository';

@Module({
  imports: [SettingsModule],
  controllers: [QueryController],
  providers: [QueryService, UsageRepository],
  exports: [],
})
export class QueriesModule {}
