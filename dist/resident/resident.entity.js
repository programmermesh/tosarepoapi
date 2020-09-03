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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentEntity = void 0;
var typeorm_1 = require("typeorm");
var ResidentEntity = /** @class */ (function () {
    function ResidentEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "fullName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "spouseName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ResidentEntity.prototype, "numberOfChildren", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "childrenName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "houseNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "houseType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "username", void 0);
    ResidentEntity = __decorate([
        typeorm_1.Entity('resident')
    ], ResidentEntity);
    return ResidentEntity;
}());
exports.ResidentEntity = ResidentEntity;
//# sourceMappingURL=resident.entity.js.map