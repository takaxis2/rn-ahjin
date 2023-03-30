"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BomDrawingModule = void 0;
const common_1 = require("@nestjs/common");
const bom_drawing_service_1 = require("./bom-drawing.service");
const bom_drawing_controller_1 = require("./bom-drawing.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bom_entity_1 = require("../entity/bom.entity");
const bom_drawing_entity_1 = require("../entity/bom-drawing.entity");
let BomDrawingModule = class BomDrawingModule {
};
BomDrawingModule = __decorate([
    (0, common_1.Module)({
        controllers: [bom_drawing_controller_1.BomDrawingController],
        providers: [bom_drawing_service_1.BomDrawingService],
        imports: [typeorm_1.TypeOrmModule.forFeature([bom_entity_1.Bom, bom_drawing_entity_1.BomDrawing])]
    })
], BomDrawingModule);
exports.BomDrawingModule = BomDrawingModule;
//# sourceMappingURL=bom-drawing.module.js.map