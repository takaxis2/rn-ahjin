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
exports.BomController = void 0;
const common_1 = require("@nestjs/common");
const bom_service_1 = require("./bom.service");
const create_bom_dto_1 = require("./dto/create-bom.dto");
const update_bom_dto_1 = require("./dto/update-bom.dto");
let BomController = class BomController {
    constructor(bomService) {
        this.bomService = bomService;
    }
    async create(createBomDto) {
        return await this.bomService.create(createBomDto);
    }
    async findAll(id, type) {
        return await this.bomService.findAll(+id, type);
    }
    async findOne(id) {
        return await this.bomService.findOne(+id);
    }
    async update(id, updateBomDto) {
        console.log(updateBomDto, id);
        return await this.bomService.update(+id, updateBomDto);
    }
    async remove(id) {
        return await this.bomService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bom_dto_1.CreateBomDto]),
    __metadata("design:returntype", Promise)
], BomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/:type'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/one'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bom_dto_1.UpdateBomDto]),
    __metadata("design:returntype", Promise)
], BomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BomController.prototype, "remove", null);
BomController = __decorate([
    (0, common_1.Controller)('bom'),
    __metadata("design:paramtypes", [bom_service_1.BomService])
], BomController);
exports.BomController = BomController;
//# sourceMappingURL=bom.controller.js.map