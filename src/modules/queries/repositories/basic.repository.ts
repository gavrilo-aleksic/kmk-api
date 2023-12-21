import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ExpenseUsageQueryModel } from '../entities/ExpenseUsageQuery';
import { OperationQueryModel } from '../entities/OperationQuery';
import { PortionQueryModel } from '../entities/PortionQuery';
import { MachineQueryModel } from '../entities/MachineQuery';
import { ExpenditureQueryModel } from '../entities/ExpenditureQuery';
import { WorkerQueryModel } from '../entities/WorkerQuery';
import { WorkTypeQueryModel } from '../entities/WorkTypeQuery';

@Injectable()
export class UsageRepository {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  getOperations() {
    return this.manager.query<OperationQueryModel>(
      `SELECT * FROM operacija ORDER BY naziv_operacije`,
    );
  }

  getPortionCodes() {
    return this.manager.query<PortionQueryModel>(
      `SELECT * FROM parcela ORDER BY sifra_parcele`,
    );
  }

  getExpenseCodes() {
    return this.manager.query<ExpenditureQueryModel>(
      `SELECT * FROM utrosci ORDER BY sifra_utroska`,
    );
  }

  getMachineCodes() {
    return this.manager.query<MachineQueryModel>(
      `SELECT * FROM masine ORDER BY sifra_masine`,
    );
  }

  getWorkersCodes() {
    return this.manager.query<WorkerQueryModel>(
      `SELECT * FROM radnici ORDER BY sifra_radnika`,
    );
  }

  getWorkTypeCodes() {
    return this.manager.query<WorkTypeQueryModel>(
      `SELECT * FROM tip_rada ORDER BY sifra_tip_rada`,
    );
  }
}
