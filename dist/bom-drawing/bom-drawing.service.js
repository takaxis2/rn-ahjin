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
exports.BomDrawingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bom_drawing_entity_1 = require("../entity/bom-drawing.entity");
const typeorm_2 = require("typeorm");
let BomDrawingService = class BomDrawingService {
    constructor(bomDrawingRepository, dateSource) {
        this.bomDrawingRepository = bomDrawingRepository;
        this.dateSource = dateSource;
    }
    async create(file, createBomDrawingDto) {
        const bomDrawing = new bom_drawing_entity_1.BomDrawing();
        if (file !== undefined) {
            bomDrawing.fileName = file.filename;
            bomDrawing.bomId = createBomDrawingDto.bomId;
            const result = await this.bomDrawingRepository.save(bomDrawing);
            return result;
        }
        return bomDrawing;
    }
    findAll() {
        return `This action returns all bomDrawing`;
    }
    findOne(id) {
        return `This action returns a #${id} bomDrawing`;
    }
    update(id, updateBomDrawingDto) {
        return `This action updates a #${id} bomDrawing`;
    }
    remove(id) {
        return `This action removes a #${id} bomDrawing`;
    }
};
BomDrawingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bom_drawing_entity_1.BomDrawing)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], BomDrawingService);
exports.BomDrawingService = BomDrawingService;
//# sourceMappingURL=bom-drawing.service.js.map