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
exports.DrawingController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const drawing_service_1 = require("./drawing.service");
const create_drawing_dto_1 = require("./dto/create-drawing.dto");
const update_drawing_dto_1 = require("./dto/update-drawing.dto");
const multerOptions_1 = require("./multerOptions");
let DrawingController = class DrawingController {
    constructor(drawingService) {
        this.drawingService = drawingService;
    }
    async create(file, createDrawingDto) {
        return await this.drawingService.create(file, createDrawingDto);
    }
    findAll() {
        return this.drawingService.findAll();
    }
    async findOne(id) {
        return await this.drawingService.findOne(+id);
    }
    update(id, updateDrawingDto) {
        return this.drawingService.update(+id, updateDrawingDto);
    }
    remove(id) {
        return this.drawingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerOptions_1.multerDiskOptions)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_drawing_dto_1.CreateDrawingDto]),
    __metadata("design:returntype", Promise)
], DrawingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DrawingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DrawingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_drawing_dto_1.UpdateDrawingDto]),
    __metadata("design:returntype", void 0)
], DrawingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DrawingController.prototype, "remove", null);
DrawingController = __decorate([
    (0, common_1.Controller)('drawing'),
    __metadata("design:paramtypes", [drawing_service_1.DrawingService])
], DrawingController);
exports.DrawingController = DrawingController;
//# sourceMappingURL=drawing.controller.js.map