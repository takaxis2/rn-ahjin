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
exports.WorkPlan = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_entity_1 = require("./BaseEntity.entity");
const bom_entity_1 = require("./bom.entity");
let WorkPlan = class WorkPlan extends BaseEntity_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], WorkPlan.prototype, "done", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkPlan.prototype, "EA", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bom_entity_1.Bom, (bom) => bom.workPlans),
    __metadata("design:type", bom_entity_1.Bom)
], WorkPlan.prototype, "bom", void 0);
WorkPlan = __decorate([
    (0, typeorm_1.Entity)()
], WorkPlan);
exports.WorkPlan = WorkPlan;
//# sourceMappingURL=work-plan.entity.js.map