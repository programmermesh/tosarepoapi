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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var payment_entity_1 = require("./payment.entity");
var typeorm_2 = require("@nestjs/typeorm");
var pendingPayment_entity_1 = require("../pendingPayment/pendingPayment.entity");
var pendingPayment_dto_1 = require("../pendingPayment/pendingPayment.dto");
var PaymentService = /** @class */ (function () {
    function PaymentService(paymentRepository, PendingPaymentRepository) {
        this.paymentRepository = paymentRepository;
        this.PendingPaymentRepository = PendingPaymentRepository;
    }
    PaymentService.prototype.create = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var PendingPaymentId, parameter, payment, data2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PendingPaymentRepository.findOne(id)];
                    case 1:
                        PendingPaymentId = _a.sent();
                        (data.amount = data.amount),
                            (data.fullName = data.fullName),
                            (data.houseType = data.houseType),
                            (data.houseNumber = data.houseNumber),
                            (data.month = data.month),
                            (data.residentId = data.residentId),
                            (data.status = data.status),
                            (data.year = data.year),
                            (data.processed = 'Yes'),
                            (data.file = data.file);
                        parameter = [data];
                        payment = this.paymentRepository.create(parameter);
                        return [4 /*yield*/, this.paymentRepository.save(parameter)];
                    case 2:
                        _a.sent();
                        data2 = new pendingPayment_dto_1.PendingPaymentDTO();
                        data2.processed = 'Yes';
                        this.PendingPaymentRepository.update({ id: id }, data2);
                        return [2 /*return*/, {
                                payment: payment,
                                ResponseCode: '00',
                                ResponseDescription: 'Payment approved succesfully',
                            }];
                }
            });
        });
    };
    PaymentService.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRepository.findOne(id)];
                    case 1:
                        payment = _a.sent();
                        if (!payment) {
                            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
                        }
                        return [2 /*return*/, payment];
                }
            });
        });
    };
    PaymentService.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRepository.find()];
                    case 1:
                        payment = _a.sent();
                        if (!payment.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/, {
                                payment: payment,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    PaymentService.prototype.getPaymentByResidentId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRepository.find({ residentId: id })];
                    case 1:
                        payment = _a.sent();
                        if (!payment.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '99',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/, {
                                resident: payment,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    PaymentService.prototype.getPaymentMonthYear = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var payment, TotalAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRepository.find()];
                    case 1:
                        payment = (_a.sent()).filter(function (x) { return x.month === data.month && x.year === data.year; });
                        TotalAmount = 0;
                        payment.forEach(function (x) { return (TotalAmount += x.amount); });
                        if (!payment.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '99',
                                    ResponseDescription: 'Not Paid',
                                }];
                        }
                        return [2 /*return*/, {
                                resident: payment,
                                Totalamount: TotalAmount,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    PaymentService.prototype.getPaymentYear = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var annum, PaymentPerAnnum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRepository.find()];
                    case 1:
                        annum = (_a.sent()).filter(function (x) { return x.year === data.year; });
                        PaymentPerAnnum = 0;
                        annum.forEach(function (x) { return (PaymentPerAnnum += x.amount); });
                        if (!annum.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '99',
                                    ResponseDescription: 'Not Paid',
                                }];
                        }
                        return [2 /*return*/, {
                                Totalamount: PaymentPerAnnum,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    PaymentService.prototype.updatePaymentById = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        payment = _a.sent();
                        return [4 /*yield*/, this.paymentRepository.update(id, data)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.find(id)];
                    case 3:
                        payment = _a.sent();
                        return [2 /*return*/, {
                                resident: payment,
                                ResponseCode: '00',
                                ResponseDescription: 'Payment updated succesfully',
                            }];
                }
            });
        });
    };
    PaymentService.prototype.deletePaymentById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        payment = _a.sent();
                        return [4 /*yield*/, this.paymentRepository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                resident: payment,
                                ResponseCode: '00',
                                ResponseDescription: 'Payment deleted succesfully',
                            }];
                }
            });
        });
    };
    PaymentService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_2.InjectRepository(payment_entity_1.PaymentEntity)),
        __param(1, typeorm_2.InjectRepository(pendingPayment_entity_1.PendingPaymentEntity)),
        __metadata("design:paramtypes", [typeorm_1.Repository,
            typeorm_1.Repository])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map