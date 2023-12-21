import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ExpenseUsageQueryModel } from '../entities/ExpenseUsageQuery';
import { ExpenseWorkerQuery } from '../entities/ExpenseWorkerQuery';

@Injectable()
export class UsageRepository {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  getUsages(expenseId: string) {
    return this.manager.query<ExpenseUsageQueryModel>(
      `SELECT  DISTINCT ru.kolicina_utroska, ru.sifra_utroska, u.naziv_utroska, ru.id_rashodi_utrosci FROM rashodi_utrosci AS ru, utrosci AS u WHERE 
      (id_rashoda = $1) AND (ru.sifra_utroska = u.sifra_utroska)`,
      [expenseId],
    );
  }

  getUsagesWorkers(expenseId: string) {
    console.log({ expenseId });
    return this.manager.query<ExpenseWorkerQuery>(
      `SELECT DISTINCT rr.cas, rr.ucinak, rr.zastoj, rr.cas_cena, rr.cas_ucinak, rr.pov_ucinak, rr.cas_zastoj, ra.ime_i_prezime_radnika, tr.naziv_tipa_rada, rr.sifra_radnika, rr.sifra_tip_rada, rr.id_rashodi_radnici 
      FROM rashodi_radnici AS rr, rashodi AS r, radnici AS ra, tip_rada AS tr WHERE (rr.id_rashoda = $1) AND (rr.sifra_radnika = ra.sifra_radnika) AND (rr.sifra_tip_rada = tr.sifra_tip_rada)`,
      [expenseId],
    );
  }
}
