import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsString } from 'class-validator';

export class ExpenseUsageQueryModel {
  @ApiProperty({
    description: 'Kolicina utroska',
  })
  @IsDefined()
  @IsNumber()
  kolicina_utroska?: number;

  @ApiProperty({
    description: 'Sifra Utroska',
  })
  @IsDefined()
  @IsString()
  sifra_utroska?: string;

  @ApiProperty({
    description: 'Naziv Utroska',
  })
  naziv_utroska?: string;

  @ApiProperty({
    description: 'ID Rashodi-Utrosci',
  })
  @IsDefined()
  @IsNumber()
  id_rashodi_utrosci?: number;
}
