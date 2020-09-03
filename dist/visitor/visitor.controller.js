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
exports.VisitorController = void 0;
var common_1 = require("@nestjs/common");
var visitor_service_1 = require("./visitor.service");
var swagger_1 = require("@nestjs/swagger");
var visitor_dto_1 = require("./visitor.dto");
var VisitorController = /** @class */ (function () {
    function VisitorController(visitorService) {
        this.visitorService = visitorService;
        this.logger = new common_1.Logger('VisitorController');
    }
    VisitorController.prototype.createVisitor = function (id, data) {
        this.logger.log(JSON.stringify(id, data));
        return this.visitorService.create(id, data);
    };
    VisitorController.prototype.showAllVisitor = function () {
        return this.visitorService.showAll();
    };
    VisitorController.prototype.getVisitorByResidentId = function (id) {
        return this.visitorService.getVisitorByResidentId(id);
    };
    VisitorController.prototype.getVisitorById = function (id) {
        return this.visitorService.getVisitorById(id);
    };
    VisitorController.prototype.updateVisitorById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.visitorService.updateVisitorById(id, data);
    };
    VisitorController.prototype.deleteVisitorById = function (id) {
        return this.visitorService.deleteVisitorById(id);
    };
    __decorate([
        common_1.Post(':id'),
        common_1.UsePipes(new common_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: visitor_dto_1.VisitorDTO }),
        __param(0, common_1.Param()), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], VisitorController.prototype, "createVisitor", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VisitorController.prototype, "showAllVisitor", null);
    __decorate([
        common_1.Get('/visitor/:id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], VisitorController.prototype, "getVisitorByResidentId", null);
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VisitorController.prototype, "getVisitorById", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new common_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: visitor_dto_1.VisitorDTO }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], VisitorController.prototype, "updateVisitorById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VisitorController.prototype, "deleteVisitorById", null);
    VisitorController = __decorate([
        common_1.Controller('visitor'),
        __metadata("design:paramtypes", [visitor_service_1.VisitorService])
    ], VisitorController);
    return VisitorController;
}());
exports.VisitorController = VisitorController;
//# sourceMappingURL=visitor.controller.js.map