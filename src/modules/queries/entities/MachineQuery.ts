import { ApiProperty } from '@nestjs/swagger';

export class MachineQueryModel {
  @ApiProperty({
    description: 'Sifra masine',
  })
  sifra_masine?: number;

  @ApiProperty({
    description: 'Naziv masine',
  })
  naziv_masine?: string;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Vrsta masine',
  })
  vrsta_masine?: number;

  @ApiProperty({
    description: 'Tip masine',
  })
  tip_masine?: number;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;
}
