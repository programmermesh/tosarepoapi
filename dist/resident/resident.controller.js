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
exports.ResidentController = void 0;
var common_1 = require("@nestjs/common");
var resident_service_1 = require("./resident.service");
var resident_dto_1 = require("./resident.dto");
var swagger_1 = require("@nestjs/swagger");
var validation_pipe_1 = require("../shared/validation.pipe");
var ResidentController = /** @class */ (function () {
    function ResidentController(residentService) {
        this.residentService = residentService;
        this.logger = new common_1.Logger('ResidentController');
    }
    ResidentController.prototype.createResident = function (resident) {
        this.logger.log(JSON.stringify(resident));
        return this.residentService.create(resident);
    };
    ResidentController.prototype.showAllResident = function () {
        return this.residentService.showAll();
    };
    ResidentController.prototype.getResidentById = function (id) {
        return this.residentService.getResidentById(id);
    };
    ResidentController.prototype.updateResidentById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.residentService.updateResidentById(id, data);
    };
    ResidentController.prototype.deleteResidentById = function (id) {
        return this.residentService.deleteResidentById(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiBody({ type: resident_dto_1.ResidentDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ResidentController.prototype, "createResident", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ResidentController.prototype, "showAllResident", null);
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ResidentController.prototype, "getResidentById", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: resident_dto_1.ResidentDTO }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ResidentController.prototype, "updateResidentById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ResidentController.prototype, "deleteResidentById", null);
    ResidentController = __decorate([
        common_1.Controller('resident'),
        __metadata("design:paramtypes", [resident_service_1.ResidentService])
    ], ResidentController);
    return ResidentController;
}());
exports.ResidentController = ResidentController;
//# sourceMappingURL=resident.controller.js.map