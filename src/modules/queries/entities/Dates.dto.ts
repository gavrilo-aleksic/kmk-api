import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';

export class DatesDTO {
  @ApiProperty({
    description: 'Pocetak',
  })
  @IsDateString()
  od: Date;

  @ApiProperty({
    description: 'Kraj',
  })
  @IsDateString()
  do: Date;
}
