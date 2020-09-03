"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
var resident_module_1 = require("./resident/resident.module");
var orm_config_1 = require("./orm.config");
var core_1 = require("@nestjs/core");
var http_error_filter_1 = require("./shared/http.error.filter");
var notice_module_1 = require("./notice/notice.module");
var payment_module_1 = require("./payment/payment.module");
var levy_module_1 = require("./levy/levy.module");
var visitor_module_1 = require("./visitor/visitor.module");
var user_module_1 = require("./user/user.module");
var pendingPayment_module_1 = require("./pendingPayment/pendingPayment.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
                resident_module_1.ResidentModule,
                notice_module_1.NoticeModule,
                payment_module_1.PaymentModule,
                pendingPayment_module_1.PendingPaymentModule,
                levy_module_1.LevyModule,
                visitor_module_1.VisitorModule,
                user_module_1.UserModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_FILTER,
                    useClass: http_error_filter_1.HttpErrorFIlter,
                },
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map