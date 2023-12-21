import { ApiProperty } from '@nestjs/swagger';

export class ExpenseQueryModel {
  @ApiProperty({
    description: 'ID Rashoda',
  })
  id_rashoda?: number;

  @ApiProperty({
    description: 'Datum rashoda',
  })
  datum_rashoda?: string;

  @ApiProperty({
    description: 'Naziv parcele',
  })
  naziv_parcele?: string;

  @ApiProperty({
    description: 'Naziv kulture',
  })
  naziv_kulture?: Date;

  @ApiProperty({
    description: 'Naziv masine',
  })
  naziv_masine?: string;

  @ApiProperty({
    description: 'Naziv operacije',
  })
  naziv_operacije?: string;

  @ApiProperty({
    description: 'Sifra masine',
  })
  sifra_masine?: string;

  @ApiProperty({
    description: 'Sifra parcele',
  })
  sifra_parcele?: string;

  @ApiProperty({
    description: 'Sifra kulture',
  })
  sifra_kulture?: string;

  @ApiProperty({
    description: 'Sifra operacije',
  })
  sifra_operacije?: string;
}
