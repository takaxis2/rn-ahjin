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
exports.ModelDetail = void 0;
const BaseEntity_entity_1 = require("./BaseEntity.entity");
const typeorm_1 = require("typeorm");
const bom_entity_1 = require("./bom.entity");
const Drawing_entity_1 = require("./Drawing.entity");
const model_entity_1 = require("./model.entity");
const prod_plan_entity_1 = require("./prod-plan.entity");
let ModelDetail = class ModelDetail extends BaseEntity_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModelDetail.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => model_entity_1.Model, (model) => model.modelDetails),
    __metadata("design:type", model_entity_1.Model)
], ModelDetail.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prod_plan_entity_1.ProdPlan, (prodPlan) => prodPlan.modelDetail),
    __metadata("design:type", Array)
], ModelDetail.prototype, "prodPlans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bom_entity_1.Bom, (bom) => bom.modelDetail),
    __metadata("design:type", Array)
], ModelDetail.prototype, "boms", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Drawing_entity_1.Drawing),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Drawing_entity_1.Drawing)
], ModelDetail.prototype, "drawing", void 0);
ModelDetail = __decorate([
    (0, typeorm_1.Entity)('modelDetail')
], ModelDetail);
exports.ModelDetail = ModelDetail;
//# sourceMappingURL=modelDetail.entity.js.map