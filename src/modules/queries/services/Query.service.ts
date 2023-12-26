import { Injectable } from '@nestjs/common';
import { UsageRepository } from '../repositories/usage.repository';
import { AppUserJWT } from 'src/modules/auth/auth.types';
import { BaseRepository } from '../repositories/basic.repository';

@Injectable()
export class QueryService {
  constructor(
    private usageRepository: UsageRepository,
    private baseRepository: BaseRepository,
  ) {}

  getUsageQuery(user: AppUserJWT, expenseId: string) {
    return this.usageRepository.getUsages(expenseId);
  }

  getUsageWorkersQuery(user: AppUserJWT, expenseId: string) {
    return this.usageRepository.getUsagesWorkers(expenseId);
  }

  getExpensesQuery(user: AppUserJWT, dateFrom: Date, dateTo: Date) {
    return this.usageRepository.getExpenses(user.id, dateFrom, dateTo);
  }

  getOperations(user: AppUserJWT) {
    return this.baseRepository.getOperations(user.id);
  }

  getCultures(user: AppUserJWT) {
    return this.baseRepository.getCultures(user.id);
  }

  getEntities(user: AppUserJWT) {
    return Promise.all([
      this.baseRepository.getCultures(user.id),
      this.baseRepository.getOperations(user.id),
      this.baseRepository.getMachines(user.id),
      this.baseRepository.getPortions(user.id),
      this.baseRepository.getWorkTypes(user.id),
      this.baseRepository.getWorkers(user.id),
      this.baseRepository.getExpenses(user.id),
    ]).then((res) => ({
      kulture: res[0],
      operacije: res[1],
      masine: res[2],
      parcele: res[3],
      tipoviRada: res[4],
      radnici: res[5],
      utrosci: res[6],
    }));
  }
}
