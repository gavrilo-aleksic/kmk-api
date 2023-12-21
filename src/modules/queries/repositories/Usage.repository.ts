import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ExpenseUsageQueryModel } from '../entities/ExpenseUsageQuery';

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
}
