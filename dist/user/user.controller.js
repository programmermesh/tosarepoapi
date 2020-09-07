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
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var user_service_1 = require("./user.service");
var user_dto_1 = require("./user.dto");
var validation_pipe_1 = require("./../shared/validation.pipe");
var swagger_1 = require("@nestjs/swagger");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger('UserController');
    }
    UserController.prototype.showAllUsers = function () {
        return this.userService.showAll();
    };
    UserController.prototype.login = function (data) {
        return this.userService.login(data);
    };
    UserController.prototype.register = function (data) {
        return this.userService.register(data);
    };
    UserController.prototype.updateRegister = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.userService.updateRegister(id, data);
    };
    UserController.prototype.deleteUser = function (id) {
        return this.userService.deleteUser(id);
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "showAllUsers", null);
    __decorate([
        common_1.Post('login'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiBody({ type: user_dto_1.LoginDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.LoginDTO]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "login", null);
    __decorate([
        common_1.Post('register'),
        swagger_1.ApiBody({ type: user_dto_1.UserDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [user_dto_1.UserDTO]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "register", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: user_dto_1.UserUP }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, user_dto_1.UserUP]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "updateRegister", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "deleteUser", null);
    UserController = __decorate([
        common_1.Controller('users'),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map