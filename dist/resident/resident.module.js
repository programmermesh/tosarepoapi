"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentModule = void 0;
var common_1 = require("@nestjs/common");
var resident_controller_1 = require("./resident.controller");
var resident_service_1 = require("./resident.service");
var resident_entity_1 = require("./resident.entity");
var typeorm_1 = require("@nestjs/typeorm");
var ResidentModule = /** @class */ (function () {
    function ResidentModule() {
    }
    ResidentModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([resident_entity_1.ResidentEntity])],
            controllers: [resident_controller_1.ResidentController],
            providers: [resident_service_1.ResidentService],
        })
    ], ResidentModule);
    return ResidentModule;
}());
exports.ResidentModule = ResidentModule;
//# sourceMappingURL=resident.module.js.map