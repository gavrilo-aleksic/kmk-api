import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { OperationQueryModel } from '../entities/OperationQuery';
import { PortionQueryModel } from '../entities/PortionQuery';
import { MachineQueryModel } from '../entities/MachineQuery';
import { ExpenditureQueryModel } from '../entities/ExpenditureQuery';
import { WorkerQueryModel } from '../entities/WorkerQuery';
import { WorkTypeQueryModel } from '../entities/WorkTypeQuery';

@Injectable()
export class BaseRepository {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  getOperations(userId: string) {
    return this.manager.query<OperationQueryModel>(
      `SELECT * FROM operacija  WHERE sifra_korisnika=$1 ORDER BY naziv_operacije`,
      [userId],
    );
  }

  getCultures(userId: string) {
    return this.manager.query<OperationQueryModel>(
      `SELECT * FROM kultura WHERE sifra_korisnika=$1 ORDER BY naziv_kulture`,
      [userId],
    );
  }

  getPortions(userId: string) {
    return this.manager.query<PortionQueryModel>(
      `SELECT * FROM parcela WHERE sifra_korisnika=$1 ORDER BY sifra_parcele`,
      [userId],
    );
  }

  getExpenseCodes() {
    return this.manager.query<ExpenditureQueryModel>(
      `SELECT * FROM utrosci ORDER BY sifra_utroska`,
    );
  }

  getMachines(userId: string) {
    return this.manager.query<MachineQueryModel>(
      `SELECT * FROM masine WHERE sifra_korisnika=$1 ORDER BY sifra_masine`,
      [userId],
    );
  }

  getWorkers() {
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
