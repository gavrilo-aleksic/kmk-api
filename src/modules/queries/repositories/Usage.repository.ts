import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ExpenseUsageQueryModel } from '../entities/ExpenseUsageQuery';
import { UsagesWorkerQuery } from '../entities/UsagesWorkerQuery';
import { ExpenseQueryModel } from '../entities/ExpenseQuery';

@Injectable()
export class UsageRepository {
  constructor(
    @InjectEntityManager()
    private manager: EntityManager,
  ) {}

  getUsages(expenseId: string) {
    return this.manager.query<ExpenseUsageQueryModel[]>(
      `SELECT  DISTINCT ru.kolicina_utroska, ru.sifra_utroska, u.naziv_utroska, ru.id_rashodi_utrosci FROM rashodi_utrosci AS ru, utrosci AS u WHERE 
      (id_rashoda = $1) AND (ru.sifra_utroska = u.sifra_utroska)`,
      [expenseId],
    );
  }

  getExpenses(userId: number, dateFrom: Date, dateTo: Date) {
    return this.manager.query<ExpenseQueryModel[]>(
      `SELECT DISTINCT r.id_rashoda, r.datum_rashoda AS datum_rashoda, p.naziv_parcele, k.naziv_kulture, m.naziv_masine, o.naziv_operacije, r.sifra_parcele, r.sifra_masine, r.sifra_kulture, r.sifra_operacije
       FROM rashodi AS r, masine AS m, kultura AS k, operacija AS o, parcela AS p 
       WHERE (r.sifra_parcele = p.sifra_parcele) AND (r.sifra_kulture = k.sifra_kulture) AND (r.sifra_operacije = o.sifra_operacije) AND (r.sifra_masine = m.sifra_masine) 
       AND (r.sifra_korisnika = $1) 
       AND r.datum_rashoda BETWEEN SYMMETRIC $2 AND $3
      ORDER BY r.id_rashoda`,
      [userId, dateFrom, dateTo],
    );
  }

  updateExpense(
    userId: number,
    expenseId: number,
    partialModel: Partial<ExpenseQueryModel>,
  ) {
    return this.manager.query(
      `UPDATE rashodi SET 
    datum_rashoda=$3, 
    sifra_kulture=$4, 
    sifra_masine=$5,
    sifra_operacije=$6,
    sifra_parcele=$7  
    WHERE sifra_korisnika=$1 AND id_rashoda=$2`,
      [
        userId,
        expenseId,
        partialModel.datum_rashoda,
        partialModel.sifra_kulture,
        partialModel.sifra_masine,
        partialModel.sifra_operacije,
        partialModel.sifra_parcele,
      ],
    );
  }

  getUsagesWorkers(expenseId: string) {
    return this.manager.query<UsagesWorkerQuery[]>(
      `SELECT DISTINCT rr.cas, rr.ucinak, rr.zastoj, rr.cas_cena, rr.cas_ucinak, rr.pov_ucinak, rr.cas_zastoj, ra.ime_i_prezime_radnika, tr.naziv_tipa_rada, rr.sifra_radnika, rr.sifra_tip_rada, rr.id_rashodi_radnici 
      FROM rashodi_radnici AS rr, rashodi AS r, radnici AS ra, tip_rada AS tr WHERE (rr.id_rashoda = $1) AND (rr.sifra_radnika = ra.sifra_radnika) AND (rr.sifra_tip_rada = tr.sifra_tip_rada)`,
      [expenseId],
    );
  }

  updateExpenseUsage(
    userId: number,
    expenseUsageId: number,
    partialModel: Partial<ExpenseUsageQueryModel>,
  ) {
    return this.manager.query(
      `UPDATE rashodi_utrosci SET 
      sifra_utroska=$3,
      kolicina_utroska=$4
    WHERE sifra_korisnika=$1 AND id_rashodi_utrosci=$2`,
      [
        userId,
        expenseUsageId,
        partialModel.sifra_utroska,
        partialModel.kolicina_utroska,
      ],
    );
  }

  updateUsageWorker(
    userId: number,
    usageWorkerId: number,
    partialModel: Partial<UsagesWorkerQuery>,
  ) {
    return this.manager.query(
      `UPDATE rashodi_radnici SET 
      cas=$3, 
      cas_cena=$4, 
      cas_ucinak=$5,
      cas_zastoj=$6,
      pov_ucinak=$7,  
      sifra_radnika=$8,  
      sifra_tip_rada=$9,  
      ucinak=$10,  
      zastoj=$11 
    WHERE sifra_korisnika=$1 AND id_rashodi_radnici=$2`,
      [
        userId,
        usageWorkerId,
        partialModel.cas,
        partialModel.cas_cena,
        partialModel.cas_ucinak,
        partialModel.cas_zastoj,
        partialModel.pov_ucinak,
        partialModel.sifra_radnika,
        partialModel.sifra_tip_rada,
        partialModel.ucinak,
        partialModel.zastoj,
      ],
    );
  }
}
