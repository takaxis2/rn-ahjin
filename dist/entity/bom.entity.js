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
exports.Bom = void 0;
const BaseEntity_entity_1 = require("./BaseEntity.entity");
const typeorm_1 = require("typeorm");
const bom_drawing_entity_1 = require("./bom-drawing.entity");
const modelDetail_entity_1 = require("./modelDetail.entity");
const work_plan_entity_1 = require("./work-plan.entity");
let Bom = class Bom extends BaseEntity_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bom.prototype, "pi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Bom.prototype, "CNC", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bom.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Bom.prototype, "T", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bom.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Bom.prototype, "reduction", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Bom.prototype, "enrlgmnt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Bom.prototype, "shorten", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bom.prototype, "requirement", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bom_drawing_entity_1.BomDrawing),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", bom_drawing_entity_1.BomDrawing)
], Bom.prototype, "bomDrawing", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modelDetail_entity_1.ModelDetail, (modelDetail) => modelDetail.boms),
    __metadata("design:type", modelDetail_entity_1.ModelDetail)
], Bom.prototype, "modelDetail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => work_plan_entity_1.WorkPlan, (workPlan) => workPlan.bom),
    __metadata("design:type", Array)
], Bom.prototype, "workPlans", void 0);
Bom = __decorate([
    (0, typeorm_1.Entity)()
], Bom);
exports.Bom = Bom;
//# sourceMappingURL=bom.entity.js.map