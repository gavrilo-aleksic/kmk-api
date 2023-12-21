import { ApiProperty } from '@nestjs/swagger';

export class WorkerQueryModel {
  @ApiProperty({
    description: 'Sifra radnika',
  })
  sifra_radnika?: string;

  @ApiProperty({
    description: 'Ime i prezime radnika',
  })
  ime_i_prezime_radnika?: string;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;
}
