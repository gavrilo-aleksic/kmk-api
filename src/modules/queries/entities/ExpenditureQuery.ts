import { ApiProperty } from '@nestjs/swagger';

export class ExpenditureQueryModel {
  @ApiProperty({
    description: 'Sifra Utroska',
  })
  sifra_utroska?: string;

  @ApiProperty({
    description: 'Jedinica mere utroska',
  })
  jm_utroska?: string;

  @ApiProperty({
    description: 'Naziv Utroska',
  })
  naziv_utroska?: string;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;
}
