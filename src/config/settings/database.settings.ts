import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Entities } from 'src/config/entities';
import { ENVIRONMENT_KEYS } from './environment.settings';

const databaseSettings = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    type: 'postgres',
    host: configService.get<string>(ENVIRONMENT_KEYS.DATABASE_HOST),
    port: parseInt(configService.get<string>(ENVIRONMENT_KEYS.DATABASE_PORT)),
    username: configService.get<string>(ENVIRONMENT_KEYS.DATABASE_USERNAME),
    password: configService.get<string>(ENVIRONMENT_KEYS.DATABASE_PASSWORD),
    database: configService.get<string>(ENVIRONMENT_KEYS.DATABASE_NAME),
    entities: Entities,
    migrationsTableName: 'custom_migration_table',
    migrations: ['migration/*.ts'],
    logging: true,
    synchronize: false,
  };
};

export default databaseSettings;
