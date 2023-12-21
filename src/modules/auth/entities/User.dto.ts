import {
  IsEmail,
  IsDefined,
  IsString,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class LoginUserDTO {
  @IsDefined()
  @IsString()
  public username: string;

  @IsString()
  @IsDefined()
  public password: string;

  @IsBoolean()
  @IsOptional()
  public rememberMe: boolean;
}
