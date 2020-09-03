"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorModule = void 0;
var common_1 = require("@nestjs/common");
var visitor_service_1 = require("./visitor.service");
var visitor_controller_1 = require("./visitor.controller");
var visitor_entity_1 = require("./visitor.entity");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("../user/user.entity");
var VisitorModule = /** @class */ (function () {
    function VisitorModule() {
    }
    VisitorModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([visitor_entity_1.VisitorEntity, user_entity_1.UserEntity])],
            controllers: [visitor_controller_1.VisitorController],
            providers: [visitor_service_1.VisitorService, user_entity_1.UserEntity],
        })
    ], VisitorModule);
    return VisitorModule;
}());
exports.VisitorModule = VisitorModule;
//# sourceMappingURL=visitor.module.js.map