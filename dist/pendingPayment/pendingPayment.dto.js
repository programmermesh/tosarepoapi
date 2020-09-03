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
exports.PendingPaymentDTO = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var PendingPaymentDTO = /** @class */ (function () {
    function PendingPaymentDTO() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "month", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "year", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "status", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsInt(),
        __metadata("design:type", Number)
    ], PendingPaymentDTO.prototype, "amount", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "houseType", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "residentId", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "fullName", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "houseNumber", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "processed", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'binary' }),
        __metadata("design:type", String)
    ], PendingPaymentDTO.prototype, "file", void 0);
    return PendingPaymentDTO;
}());
exports.PendingPaymentDTO = PendingPaymentDTO;
//# sourceMappingURL=pendingPayment.dto.js.map