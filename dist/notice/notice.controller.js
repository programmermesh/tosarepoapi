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
exports.NoticeController = void 0;
var common_1 = require("@nestjs/common");
var notice_service_1 = require("./notice.service");
var swagger_1 = require("@nestjs/swagger");
var notice_dto_1 = require("./notice.dto");
var NoticeController = /** @class */ (function () {
    function NoticeController(noticeService) {
        this.noticeService = noticeService;
        this.logger = new common_1.Logger('NoticeController');
    }
    NoticeController.prototype.createNotice = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.noticeService.create(data);
    };
    NoticeController.prototype.showAllNotice = function () {
        return this.noticeService.showAll();
    };
    NoticeController.prototype.getNoticeById = function (id) {
        return this.noticeService.getNoticeById(id);
    };
    NoticeController.prototype.updateNoticeById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.noticeService.updateNoticeById(id, data);
    };
    NoticeController.prototype.deleteNoticeById = function (id) {
        return this.noticeService.deleteNoticeById(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new common_1.ValidationPipe()),
        swagger_1.ApiBody({ type: notice_dto_1.NoticeDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NoticeController.prototype, "createNotice", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoticeController.prototype, "showAllNotice", null);
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NoticeController.prototype, "getNoticeById", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new common_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: notice_dto_1.NoticeDTO }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], NoticeController.prototype, "updateNoticeById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NoticeController.prototype, "deleteNoticeById", null);
    NoticeController = __decorate([
        common_1.Controller('notice'),
        __metadata("design:paramtypes", [notice_service_1.NoticeService])
    ], NoticeController);
    return NoticeController;
}());
exports.NoticeController = NoticeController;
//# sourceMappingURL=notice.controller.js.map