import { Injectable } from '@nestjs/common';
import { UsageRepository } from '../repositories/usage.repository';
import { AppUserJWT } from 'src/modules/auth/auth.types';

@Injectable()
export class QueryService {
  constructor(private usageRepository: UsageRepository) {}

  getUsageQuery(user: AppUserJWT, expenseId: string) {
    return this.usageRepository.getUsages(expenseId);
  }

  getUsageWorkersQuery(user: AppUserJWT, expenseId: string) {
    return this.usageRepository.getUsagesWorkers(expenseId);
  }

  getExpensesQuery(user: AppUserJWT, dateFrom: Date, dateTo: Date) {
    console.log({ dateFrom, dateTo });
    return this.usageRepository.getExpenses(user.id, dateFrom, dateTo);
  }
}
