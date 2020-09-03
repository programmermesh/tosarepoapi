"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Slag0007@',
    database: 'residentDB',
    synchronize: true,
    logging: true,
    entities: ['dist/**/**.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.config.js.map