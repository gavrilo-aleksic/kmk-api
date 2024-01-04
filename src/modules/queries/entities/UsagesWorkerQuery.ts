import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsInt, IsNumber, IsString } from 'class-validator';

export class UsagesWorkerQuery {
  @ApiProperty({
    description: 'Cas',
  })
  @IsNumber()
  @IsDefined()
  cas?: number;

  @ApiProperty({
    description: 'Ucinak',
  })
  @IsNumber()
  @IsDefined()
  ucinak?: number;

  @ApiProperty({
    description: 'Zastoj',
  })
  @IsNumber()
  @IsDefined()
  zastoj?: number;

  @ApiProperty({
    description: 'Cas Ucinak',
  })
  @IsNumber()
  @IsDefined()
  cas_ucinak?: number;

  @ApiProperty({
    description: 'Cas Cena',
  })
  @IsNumber()
  @IsDefined()
  cas_cena?: number;

  @ApiProperty({
    description: 'Pov Ucinak',
  })
  @IsNumber()
  @IsDefined()
  pov_ucinak?: number;

  @ApiProperty({
    description: 'Cas Zastoj',
  })
  @IsNumber()
  @IsDefined()
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
  @IsString()
  @IsDefined()
  sifra_radnika?: number;

  @ApiProperty({
    description: 'Sifra tipa rada',
  })
  @IsNumber()
  @IsDefined()
  sifra_tip_rada?: number;

  @ApiProperty({
    description: 'ID rashodi-radnici',
  })
  @IsInt()
  @IsDefined()
  id_rashodi_radnici?: number;
}
