import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class LoginUserDTO {
  @IsDefined()
  @IsString()
  @ApiProperty({
    description: 'Korisnicko ime',
  })
  public username: string;

  @IsString()
  @IsDefined()
  @ApiProperty({
    description: 'lozinka',
  })
  public password: string;
}
