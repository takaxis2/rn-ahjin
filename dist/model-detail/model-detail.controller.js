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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDetailController = void 0;
const common_1 = require("@nestjs/common");
const model_detail_service_1 = require("./model-detail.service");
const create_model_detail_dto_1 = require("./dto/create-model-detail.dto");
const update_model_detail_dto_1 = require("./dto/update-model-detail.dto");
let ModelDetailController = class ModelDetailController {
    constructor(modelDetailService) {
        this.modelDetailService = modelDetailService;
    }
    async create(createModelDetailDto) {
        console.log('model-detail create');
        return await this.modelDetailService.create(createModelDetailDto);
    }
    async findAll(id) {
        return await this.modelDetailService.findAll(+id);
    }
    async findOne(id) {
        return await this.modelDetailService.findOne(+id);
    }
    async update(id, updateModelDetailDto) {
        console.log('updateModelDetailDto', updateModelDetailDto);
        return await this.modelDetailService.update(+id, updateModelDetailDto);
    }
    async remove(id) {
        return await this.modelDetailService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_model_detail_dto_1.CreateModelDetailDto]),
    __metadata("design:returntype", Promise)
], ModelDetailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/all'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelDetailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/one'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelDetailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_model_detail_dto_1.UpdateModelDetailDto]),
    __metadata("design:returntype", Promise)
], ModelDetailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelDetailController.prototype, "remove", null);
ModelDetailController = __decorate([
    (0, common_1.Controller)('model-detail'),
    __metadata("design:paramtypes", [model_detail_service_1.ModelDetailService])
], ModelDetailController);
exports.ModelDetailController = ModelDetailController;
//# sourceMappingURL=model-detail.controller.js.map