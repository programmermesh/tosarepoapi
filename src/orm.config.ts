import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: ['dist/**/**.entity{.ts,.js}'],
  ssl: true,
};
