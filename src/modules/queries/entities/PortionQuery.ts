import { ApiProperty } from '@nestjs/swagger';

export class PortionQueryModel {
  @ApiProperty({
    description: 'Sifra parcele',
  })
  sifra_parcele?: number;

  @ApiProperty({
    description: 'Naziv parcele',
  })
  naziv_parcele?: string;

  @ApiProperty({
    description: 'Povrsina',
  })
  povrsina?: number;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;
}
