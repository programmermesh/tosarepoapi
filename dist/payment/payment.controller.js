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
exports.PaymentController = void 0;
var common_1 = require("@nestjs/common");
var payment_service_1 = require("./payment.service");
var payment_dto_1 = require("./payment.dto");
var swagger_1 = require("@nestjs/swagger");
var validation_pipe_1 = require("../shared/validation.pipe");
var paymentMonth_dto_1 = require("../shared/paymentMonth.dto");
var paymentYear_dto_1 = require("../shared/paymentYear.dto");
var PaymentController = /** @class */ (function () {
    function PaymentController(paymentService) {
        this.paymentService = paymentService;
        this.logger = new common_1.Logger('PaymentController');
    }
    PaymentController.prototype.createPayment = function (id, payment) {
        this.logger.log(JSON.stringify(payment));
        return this.paymentService.create(id, payment);
    };
    PaymentController.prototype.showAllPayment = function () {
        return this.paymentService.showAll();
    };
    PaymentController.prototype.getPaymentByResidentId = function (id) {
        return this.paymentService.getPaymentByResidentId(id);
    };
    PaymentController.prototype.getPaymentMonthYear = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.paymentService.getPaymentMonthYear(data);
    };
    PaymentController.prototype.getPaymentYear = function (model) {
        this.logger.log(JSON.stringify(model));
        return this.paymentService.getPaymentYear(model);
    };
    PaymentController.prototype.updateResidentById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.paymentService.updatePaymentById(id, data);
    };
    PaymentController.prototype.deletePaymentById = function (id) {
        return this.paymentService.deletePaymentById(id);
    };
    __decorate([
        common_1.Post('/approve/:id'),
        swagger_1.ApiBody({ type: payment_dto_1.PaymentDTO }),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "createPayment", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "showAllPayment", null);
    __decorate([
        common_1.Post('/payment/:id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "getPaymentByResidentId", null);
    __decorate([
        common_1.Post(':month'),
        swagger_1.ApiBody({ type: paymentMonth_dto_1.PaymentMonthDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [paymentMonth_dto_1.PaymentMonthDTO]),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "getPaymentMonthYear", null);
    __decorate([
        common_1.Post('/perannum/:year'),
        swagger_1.ApiBody({ type: paymentYear_dto_1.PaymentYearDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [paymentYear_dto_1.PaymentYearDTO]),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "getPaymentYear", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: payment_dto_1.PaymentDTO }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "updateResidentById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PaymentController.prototype, "deletePaymentById", null);
    PaymentController = __decorate([
        common_1.Controller('payment'),
        __metadata("design:paramtypes", [payment_service_1.PaymentService])
    ], PaymentController);
    return PaymentController;
}());
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map