import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'korisnici' })
export class UserModel {
  @PrimaryColumn('varchar', { name: 'sifra_korisnika' })
  @ApiProperty({
    example: '1',
    description: 'ID korisnika',
  })
  public id: string;

  @Column({ type: 'varchar', name: 'naziv_korisnika' })
  @ApiProperty({
    example: 'Pera Peric',
    description: 'Korisnicko ime',
  })
  public username: string;

  @Column({ type: 'timestamp', name: 'ts' })
  public ts?: string;

  @Column({ type: 'varchar', name: 'psw_korisnika' })
  @Exclude()
  public password?: string;

  @ApiProperty({
    example: '1',
    description: 'Nivo pristupa',
  })
  @Column({ type: 'varchar', name: 'nivo_korisnika' })
  public level?: string;
}
