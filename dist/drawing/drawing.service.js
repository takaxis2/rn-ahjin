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
exports.DrawingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Drawing_entity_1 = require("../entity/Drawing.entity");
const typeorm_2 = require("typeorm");
let DrawingService = class DrawingService {
    constructor(drawingRepository, dataSource) {
        this.drawingRepository = drawingRepository;
        this.dataSource = dataSource;
    }
    async create(file, createDrawingDto) {
        const drawing = new Drawing_entity_1.Drawing();
        if (file !== undefined) {
            drawing.fileName = file.filename;
            drawing.modelDetailId = createDrawingDto.modelDetailId;
            const result = await this.drawingRepository.save(drawing);
            return result;
        }
        return drawing;
    }
    findAll() {
        return `This action returns all drawing`;
    }
    async findOne(id) {
        return `This action returns a #${id} drawing`;
    }
    update(id, updateDrawingDto) {
        return `This action updates a #${id} drawing`;
    }
    remove(id) {
        return `This action removes a #${id} drawing`;
    }
};
DrawingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Drawing_entity_1.Drawing)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], DrawingService);
exports.DrawingService = DrawingService;
//# sourceMappingURL=drawing.service.js.map