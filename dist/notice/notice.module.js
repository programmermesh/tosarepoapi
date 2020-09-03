"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeModule = void 0;
var common_1 = require("@nestjs/common");
var notice_service_1 = require("./notice.service");
var notice_controller_1 = require("./notice.controller");
var notice_entity_1 = require("./notice.entity");
var typeorm_1 = require("@nestjs/typeorm");
var NoticeModule = /** @class */ (function () {
    function NoticeModule() {
    }
    NoticeModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([notice_entity_1.NoticeEntity])],
            controllers: [notice_controller_1.NoticeController],
            providers: [notice_service_1.NoticeService],
        })
    ], NoticeModule);
    return NoticeModule;
}());
exports.NoticeModule = NoticeModule;
//# sourceMappingURL=notice.module.js.map