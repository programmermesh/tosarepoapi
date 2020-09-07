import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   url: process.env.DATABASE_URL,
//   synchronize: true,
//   logging: true,
//   entities: ['dist/**/**.entity{.ts,.js}'],
// };
export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'tosarepo.com.ng',
  port: 3306,
  username: 'tosarepo_resident',
  password: 'Slag0007@',
  database: 'tosarepo_residentDB',
  synchronize: true,
  logging: true,
  entities: ['dist/**/**.entity{.ts,.js}'],
};
