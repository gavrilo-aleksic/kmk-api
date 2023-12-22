import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

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

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Sesija koja duze traje',
  })
  public rememberMe: boolean;
}
