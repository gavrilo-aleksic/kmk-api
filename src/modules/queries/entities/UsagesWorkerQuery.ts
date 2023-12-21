import { ApiProperty } from '@nestjs/swagger';

export class UsagesWorkerQuery {
  @ApiProperty({
    description: 'Cas',
  })
  cas?: number;

  @ApiProperty({
    description: 'Ucinak',
  })
  ucinak?: number;

  @ApiProperty({
    description: 'Zastoj',
  })
  zastoj?: number;

  @ApiProperty({
    description: 'Cas Ucinak',
  })
  cas_ucinak?: number;

  @ApiProperty({
    description: 'Cas Cena',
  })
  cas_cena?: number;

  @ApiProperty({
    description: 'Pov Ucinak',
  })
  pov_ucinak?: number;

  @ApiProperty({
    description: 'Cas Zastoj',
  })
  cas_zastoj?: number;

  @ApiProperty({
    description: 'Ime i Prezime radnika',
  })
  ime_i_prezime_radnika?: string;

  @ApiProperty({
    description: 'Naziv tipa rada',
  })
  naziv_tipa_rada?: string;

  @ApiProperty({
    description: 'Sifra Radnika',
  })
  sifra_radnika?: number;

  @ApiProperty({
    description: 'Sifra tipa rada',
  })
  sifra_tip_rada?: number;

  @ApiProperty({
    description: 'ID rashodi-radnici',
  })
  id_rashodi_radnici?: number;
}
