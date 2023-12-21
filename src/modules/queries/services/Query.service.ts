import { Injectable } from '@nestjs/common';
import { UsageRepository } from '../repositories/Usage.repository';
import { AppUserJWT } from 'src/modules/auth/auth.types';

@Injectable()
export class QueryService {
  constructor(private usageRepository: UsageRepository) {}
  getUsageQuery(user: AppUserJWT, expenseId: string) {
    return this.usageRepository.getUsages(expenseId);
  }
}