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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingPaymentController = void 0;
var common_1 = require("@nestjs/common");
var pendingPayment_service_1 = require("./pendingPayment.service");
var pendingPayment_dto_1 = require("./pendingPayment.dto");
var swagger_1 = require("@nestjs/swagger");
var PendingPaymentController = /** @class */ (function () {
    function PendingPaymentController(PendingpaymentService) {
        this.PendingpaymentService = PendingpaymentService;
        this.logger = new common_1.Logger('PendingPaymentController');
    }
    PendingPaymentController.prototype.createPendingPayment = function (payment) {
        this.logger.log(JSON.stringify(payment));
        return this.PendingpaymentService.create(payment);
    };
    PendingPaymentController.prototype.showAllPendingPayment = function () {
        return this.PendingpaymentService.showAll();
    };
    PendingPaymentController.prototype.deletePendingPaymentById = function (id) {
        return this.PendingpaymentService.deletePendingPaymentById(id);
    };
    __decorate([
        common_1.Post(),
        swagger_1.ApiBody({ type: pendingPayment_dto_1.PendingPaymentDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PendingPaymentController.prototype, "createPendingPayment", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PendingPaymentController.prototype, "showAllPendingPayment", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PendingPaymentController.prototype, "deletePendingPaymentById", null);
    PendingPaymentController = __decorate([
        common_1.Controller('pendingPayment'),
        __metadata("design:paramtypes", [pendingPayment_service_1.PendingPaymentService])
    ], PendingPaymentController);
    return PendingPaymentController;
}());
exports.PendingPaymentController = PendingPaymentController;
//# sourceMappingURL=pendingPayment.controller.js.map