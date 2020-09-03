"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var resident_entity_1 = require("./resident/resident.entity");
var notice_entity_1 = require("./notice/notice.entity");
var payment_entity_1 = require("./payment/payment.entity");
var levy_entity_1 = require("./levy/levy.entity");
var visitor_entity_1 = require("./visitor/visitor.entity");
var user_entity_1 = require("./user/user.entity");
var pendingPayment_entity_1 = require("./pendingPayment/pendingPayment.entity");
exports.config = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Slag0007@',
    database: 'residentDB',
    synchronize: true,
    logging: true,
    entities: [
        resident_entity_1.ResidentEntity,
        notice_entity_1.NoticeEntity,
        payment_entity_1.PaymentEntity,
        levy_entity_1.LevyEntity,
        visitor_entity_1.VisitorEntity,
        user_entity_1.UserEntity,
        pendingPayment_entity_1.PendingPaymentEntity,
    ],
};
//# sourceMappingURL=orm.config.js.map