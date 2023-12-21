import { ApiProperty } from '@nestjs/swagger';

export class WorkTypeQueryModel {
  @ApiProperty({
    description: 'Sifra tipa rada',
  })
  sifra_tip_rada?: string;

  @ApiProperty({
    description: 'Naziv tipa rada',
  })
  naziv_tipa_rada?: string;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;

  @ApiProperty({
    description: 'Koeficijent',
  })
  koeficijent?: number;
}
