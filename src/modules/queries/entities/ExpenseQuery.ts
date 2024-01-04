import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class ExpenseQueryModel {
  @ApiProperty({
    description: 'ID Rashoda',
  })
  @IsInt()
  @IsDefined()
  id_rashoda?: number;

  @ApiProperty({
    description: 'Datum rashoda',
  })
  @IsDateString()
  @IsOptional()
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
  @IsString()
  @IsDefined()
  sifra_masine?: string;

  @ApiProperty({
    description: 'Sifra parcele',
  })
  @IsString()
  @IsDefined()
  sifra_parcele?: string;

  @ApiProperty({
    description: 'Sifra kulture',
  })
  @IsString()
  @IsDefined()
  sifra_kulture?: string;

  @ApiProperty({
    description: 'Sifra operacije',
  })
  @IsString()
  @IsDefined()
  sifra_operacije?: string;
}
