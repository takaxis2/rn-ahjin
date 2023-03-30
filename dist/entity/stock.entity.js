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
exports.Stock = void 0;
const BaseEntity_entity_1 = require("./BaseEntity.entity");
const typeorm_1 = require("typeorm");
const deliveredAtAndEA_entity_1 = require("./deliveredAtAndEA.entity");
let Stock = class Stock extends BaseEntity_entity_1.BaseEntity {
    add(deliveredAtAndEA) {
        this.deliveredAtAndEA.push(deliveredAtAndEA);
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Stock.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => deliveredAtAndEA_entity_1.DeliveredAtAndEA, (deliveredAtAndEA) => deliveredAtAndEA.stock),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Stock.prototype, "deliveredAtAndEA", void 0);
Stock = __decorate([
    (0, typeorm_1.Entity)()
], Stock);
exports.Stock = Stock;
//# sourceMappingURL=stock.entity.js.map