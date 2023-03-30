"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BomModule = void 0;
const common_1 = require("@nestjs/common");
const bom_service_1 = require("./bom.service");
const bom_controller_1 = require("./bom.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bom_entity_1 = require("../entity/bom.entity");
const bom_drawing_entity_1 = require("../entity/bom-drawing.entity");
const work_plan_entity_1 = require("../entity/work-plan.entity");
let BomModule = class BomModule {
};
BomModule = __decorate([
    (0, common_1.Module)({
        controllers: [bom_controller_1.BomController],
        providers: [bom_service_1.BomService],
        imports: [typeorm_1.TypeOrmModule.forFeature([bom_entity_1.Bom, bom_drawing_entity_1.BomDrawing, work_plan_entity_1.WorkPlan])],
    })
], BomModule);
exports.BomModule = BomModule;
//# sourceMappingURL=bom.module.js.map