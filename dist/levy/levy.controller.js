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
exports.LevyController = void 0;
var common_1 = require("@nestjs/common");
var levy_service_1 = require("./levy.service");
var levy_dto_1 = require("./levy.dto");
var swagger_1 = require("@nestjs/swagger");
var validation_pipe_1 = require("../shared/validation.pipe");
var levyApartment_dto_1 = require("../shared/levyApartment.dto");
var LevyController = /** @class */ (function () {
    function LevyController(levyService) {
        this.levyService = levyService;
        this.logger = new common_1.Logger('LevyController');
    }
    LevyController.prototype.createLevy = function (levy) {
        this.logger.log(JSON.stringify(levy));
        return this.levyService.create(levy);
    };
    LevyController.prototype.showAllPayment = function () {
        return this.levyService.showAll();
    };
    LevyController.prototype.getLevyByApartmentType = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.levyService.getLevyByApartmentType(data);
    };
    LevyController.prototype.updateLevyById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.levyService.updateLevyById(id, data);
    };
    LevyController.prototype.deleteLevyById = function (id) {
        return this.levyService.deleteLevyById(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiBody({ type: levy_dto_1.LevyDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [levy_dto_1.LevyDTO]),
        __metadata("design:returntype", void 0)
    ], LevyController.prototype, "createLevy", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LevyController.prototype, "showAllPayment", null);
    __decorate([
        common_1.Post(':levy'),
        swagger_1.ApiBody({ type: levyApartment_dto_1.LevyApartmentDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [levyApartment_dto_1.LevyApartmentDTO]),
        __metadata("design:returntype", void 0)
    ], LevyController.prototype, "getLevyByApartmentType", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: levy_dto_1.LevyDTO }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LevyController.prototype, "updateLevyById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LevyController.prototype, "deleteLevyById", null);
    LevyController = __decorate([
        common_1.Controller('levy'),
        __metadata("design:paramtypes", [levy_service_1.LevyService])
    ], LevyController);
    return LevyController;
}());
exports.LevyController = LevyController;
//# sourceMappingURL=levy.controller.js.map