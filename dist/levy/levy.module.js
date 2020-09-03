"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevyModule = void 0;
var common_1 = require("@nestjs/common");
var levy_controller_1 = require("./levy.controller");
var levy_service_1 = require("./levy.service");
var levy_entity_1 = require("./levy.entity");
var typeorm_1 = require("@nestjs/typeorm");
var LevyModule = /** @class */ (function () {
    function LevyModule() {
    }
    LevyModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([levy_entity_1.LevyEntity])],
            controllers: [levy_controller_1.LevyController],
            providers: [levy_service_1.LevyService],
        })
    ], LevyModule);
    return LevyModule;
}());
exports.LevyModule = LevyModule;
//# sourceMappingURL=levy.module.js.map