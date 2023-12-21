import { ApiProperty } from '@nestjs/swagger';

export class OperationQueryModel {
  @ApiProperty({
    description: 'Sifra operacije',
  })
  sifra_operacije?: number;

  @ApiProperty({
    description: 'Naziv operacije',
  })
  naziv_operacije?: string;

  @ApiProperty({
    description: 'TS',
  })
  ts?: Date;

  @ApiProperty({
    description: 'Sifra korisnika',
  })
  sifra_korisnika?: number;
}
