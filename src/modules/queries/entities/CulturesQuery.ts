import { ApiProperty } from '@nestjs/swagger';

export class CultureQueryModel {
  @ApiProperty({
    description: 'Sifra Kulture',
  })
  sifra_kulture?: number;

  @ApiProperty({
    description: 'Naziv Kulture',
  })
  naziv_kulture?: string;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;
}
