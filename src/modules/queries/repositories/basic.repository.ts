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

  getOperations(userId: number) {
    return this.manager.query<OperationQueryModel>(
      `SELECT * FROM operacija  WHERE sifra_korisnika=$1 ORDER BY naziv_operacije`,
      [userId],
    );
  }

  getCultures(userId: number) {
    return this.manager.query<OperationQueryModel>(
      `SELECT * FROM kultura WHERE sifra_korisnika=$1 ORDER BY naziv_kulture`,
      [userId],
    );
  }

  getPortions(userId: number) {
    return this.manager.query<PortionQueryModel>(
      `SELECT * FROM parcela WHERE sifra_korisnika=$1 ORDER BY sifra_parcele`,
      [userId],
    );
  }

  getExpenses(userId: number) {
    return this.manager.query<ExpenditureQueryModel>(
      `SELECT * FROM utrosci  WHERE sifra_korisnika=$1 ORDER BY sifra_utroska`,
      [userId],
    );
  }

  getMachines(userId: number) {
    return this.manager.query<MachineQueryModel>(
      `SELECT * FROM masine WHERE sifra_korisnika=$1 ORDER BY sifra_masine`,
      [userId],
    );
  }

  getWorkers(userId: number) {
    return this.manager.query<WorkerQueryModel>(
      `SELECT * FROM radnici WHERE sifra_korisnika=$1 ORDER BY sifra_radnika`,
      [userId],
    );
  }

  getWorkTypes(userId: number) {
    return this.manager.query<WorkTypeQueryModel>(
      `SELECT * FROM tip_rada WHERE sifra_korisnika=$1 ORDER BY sifra_tip_rada`,
      [userId],
    );
  }
}
