import { IsDateString } from 'class-validator';

export class DatesDTO {
  @IsDateString()
  od: Date;
  @IsDateString()
  do: Date;
}
