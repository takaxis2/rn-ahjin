"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdPlanModule = void 0;
const common_1 = require("@nestjs/common");
const prod_plan_service_1 = require("./prod-plan.service");
const prod_plan_controller_1 = require("./prod-plan.controller");
const typeorm_1 = require("@nestjs/typeorm");
const prod_plan_entity_1 = require("../entity/prod-plan.entity");
const modelDetail_entity_1 = require("../entity/modelDetail.entity");
let ProdPlanModule = class ProdPlanModule {
};
ProdPlanModule = __decorate([
    (0, common_1.Module)({
        controllers: [prod_plan_controller_1.ProdPlanController],
        providers: [prod_plan_service_1.ProdPlanService],
        imports: [typeorm_1.TypeOrmModule.forFeature([prod_plan_entity_1.ProdPlan, modelDetail_entity_1.ModelDetail])]
    })
], ProdPlanModule);
exports.ProdPlanModule = ProdPlanModule;
//# sourceMappingURL=prod-plan.module.js.map