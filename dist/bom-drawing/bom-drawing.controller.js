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
exports.BomDrawingController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const platform_express_1 = require("@nestjs/platform-express");
const multerOptions_1 = require("../drawing/multerOptions");
const bom_drawing_service_1 = require("./bom-drawing.service");
const create_bom_drawing_dto_1 = require("./dto/create-bom-drawing.dto");
const update_bom_drawing_dto_1 = require("./dto/update-bom-drawing.dto");
let BomDrawingController = class BomDrawingController {
    constructor(bomDrawingService) {
        this.bomDrawingService = bomDrawingService;
    }
    async create(file, createBomDrawingDto) {
        console.log('bom drawing');
        return await this.bomDrawingService.create(file, createBomDrawingDto);
    }
    findAll() {
        return this.bomDrawingService.findAll();
    }
    findOne(id) {
        return this.bomDrawingService.findOne(+id);
    }
    update(id, updateBomDrawingDto) {
        return this.bomDrawingService.update(+id, updateBomDrawingDto);
    }
    remove(id) {
        return this.bomDrawingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerOptions_1.multerDiskOptions)),
    __param(0, (0, decorators_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_bom_drawing_dto_1.CreateBomDrawingDto]),
    __metadata("design:returntype", Promise)
], BomDrawingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BomDrawingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BomDrawingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bom_drawing_dto_1.UpdateBomDrawingDto]),
    __metadata("design:returntype", void 0)
], BomDrawingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BomDrawingController.prototype, "remove", null);
BomDrawingController = __decorate([
    (0, common_1.Controller)('bom-drawing'),
    __metadata("design:paramtypes", [bom_drawing_service_1.BomDrawingService])
], BomDrawingController);
exports.BomDrawingController = BomDrawingController;
//# sourceMappingURL=bom-drawing.controller.js.map