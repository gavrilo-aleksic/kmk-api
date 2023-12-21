import { ApiProperty } from '@nestjs/swagger';

export class ExpenseUsageQueryModel {
  @ApiProperty({
    description: 'Kolicina utroska',
  })
  kolicina_utroska?: number;

  @ApiProperty({
    description: 'Sifra Utroska',
  })
  sifra_utroska?: string;

  @ApiProperty({
    description: 'Naziv Utroska',
  })
  naziv_utroska?: string;

  @ApiProperty({
    description: 'ID Rashodi-Utrosci',
  })
  id_rashodi_utrosci?: number;
}
