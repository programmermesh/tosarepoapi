"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// export const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   url: process.env.DATABASE_URL,
//   synchronize: true,
//   logging: true,
//   entities: ['dist/**/**.entity{.ts,.js}'],
// };
exports.config = {
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
//# sourceMappingURL=orm.config.js.map