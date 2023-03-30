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
exports.ProdPlan = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_entity_1 = require("./BaseEntity.entity");
const modelDetail_entity_1 = require("./modelDetail.entity");
let ProdPlan = class ProdPlan extends BaseEntity_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProdPlan.prototype, "EA", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProdPlan.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ProdPlan.prototype, "done", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modelDetail_entity_1.ModelDetail, (modelDetail) => modelDetail.prodPlans),
    __metadata("design:type", modelDetail_entity_1.ModelDetail)
], ProdPlan.prototype, "modelDetail", void 0);
ProdPlan = __decorate([
    (0, typeorm_1.Entity)()
], ProdPlan);
exports.ProdPlan = ProdPlan;
//# sourceMappingURL=prod-plan.entity.js.map