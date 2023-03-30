"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawingModule = void 0;
const common_1 = require("@nestjs/common");
const drawing_service_1 = require("./drawing.service");
const drawing_controller_1 = require("./drawing.controller");
const typeorm_1 = require("@nestjs/typeorm");
const modelDetail_entity_1 = require("../entity/modelDetail.entity");
const Drawing_entity_1 = require("../entity/Drawing.entity");
let DrawingModule = class DrawingModule {
};
DrawingModule = __decorate([
    (0, common_1.Module)({
        controllers: [drawing_controller_1.DrawingController],
        providers: [drawing_service_1.DrawingService],
        imports: [typeorm_1.TypeOrmModule.forFeature([modelDetail_entity_1.ModelDetail, Drawing_entity_1.Drawing])]
    })
], DrawingModule);
exports.DrawingModule = DrawingModule;
//# sourceMappingURL=drawing.module.js.map