"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDetailModule = void 0;
const common_1 = require("@nestjs/common");
const model_detail_service_1 = require("./model-detail.service");
const model_detail_controller_1 = require("./model-detail.controller");
const typeorm_1 = require("@nestjs/typeorm");
const modelDetail_entity_1 = require("../entity/modelDetail.entity");
const Drawing_entity_1 = require("../entity/Drawing.entity");
const model_entity_1 = require("../entity/model.entity");
let ModelDetailModule = class ModelDetailModule {
};
ModelDetailModule = __decorate([
    (0, common_1.Module)({
        controllers: [model_detail_controller_1.ModelDetailController],
        providers: [model_detail_service_1.ModelDetailService],
        imports: [typeorm_1.TypeOrmModule.forFeature([modelDetail_entity_1.ModelDetail, Drawing_entity_1.Drawing, model_entity_1.Model])],
    })
], ModelDetailModule);
exports.ModelDetailModule = ModelDetailModule;
//# sourceMappingURL=model-detail.module.js.map