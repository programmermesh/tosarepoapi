"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingPaymentEntity = void 0;
var typeorm_1 = require("typeorm");
var PendingPaymentEntity = /** @class */ (function () {
    function PendingPaymentEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "month", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "year", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], PendingPaymentEntity.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "houseType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "residentId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "fullName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "houseNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "processed", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PendingPaymentEntity.prototype, "file", void 0);
    PendingPaymentEntity = __decorate([
        typeorm_1.Entity('pendingPayment')
    ], PendingPaymentEntity);
    return PendingPaymentEntity;
}());
exports.PendingPaymentEntity = PendingPaymentEntity;
//# sourceMappingURL=pendingPayment.entity.js.map