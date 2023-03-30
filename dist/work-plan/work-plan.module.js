"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkPlanModule = void 0;
const common_1 = require("@nestjs/common");
const work_plan_service_1 = require("./work-plan.service");
const work_plan_controller_1 = require("./work-plan.controller");
const typeorm_1 = require("@nestjs/typeorm");
const work_plan_entity_1 = require("../entity/work-plan.entity");
const bom_entity_1 = require("../entity/bom.entity");
let WorkPlanModule = class WorkPlanModule {
};
WorkPlanModule = __decorate([
    (0, common_1.Module)({
        controllers: [work_plan_controller_1.WorkPlanController],
        providers: [work_plan_service_1.WorkPlanService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([work_plan_entity_1.WorkPlan, bom_entity_1.Bom])
        ]
    })
], WorkPlanModule);
exports.WorkPlanModule = WorkPlanModule;
//# sourceMappingURL=work-plan.module.js.map