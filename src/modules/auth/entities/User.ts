import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'korisnici' })
export class UserModel {
  @PrimaryColumn('varchar', { name: 'sifra_korisnika' })
  public id: string;

  @Column({ type: 'varchar', name: 'naziv_korisnika' })
  public username: string;

  @Column({ type: 'timestamp', name: 'ts' })
  public ts?: string;

  @Column({ type: 'varchar', name: 'psw_korisnika' })
  @Exclude()
  public password?: string;

  @Column({ type: 'varchar', name: 'nivo_korisnika' })
  public level?: string;
}
