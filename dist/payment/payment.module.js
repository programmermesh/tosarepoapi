"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
var common_1 = require("@nestjs/common");
var payment_controller_1 = require("./payment.controller");
var payment_service_1 = require("./payment.service");
var payment_entity_1 = require("./payment.entity");
var typeorm_1 = require("@nestjs/typeorm");
var resident_entity_1 = require("./../resident/resident.entity");
var resident_service_1 = require("../resident/resident.service");
var pendingPayment_service_1 = require("../pendingPayment/pendingPayment.service");
var pendingPayment_entity_1 = require("../pendingPayment/pendingPayment.entity");
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    payment_entity_1.PaymentEntity,
                    resident_entity_1.ResidentEntity,
                    pendingPayment_entity_1.PendingPaymentEntity,
                ]),
            ],
            controllers: [payment_controller_1.PaymentController],
            providers: [payment_service_1.PaymentService, resident_service_1.ResidentService, pendingPayment_service_1.PendingPaymentService],
        })
    ], PaymentModule);
    return PaymentModule;
}());
exports.PaymentModule = PaymentModule;
//# sourceMappingURL=payment.module.js.map