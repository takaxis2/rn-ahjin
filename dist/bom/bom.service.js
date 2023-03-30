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
exports.BomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bom_drawing_entity_1 = require("../entity/bom-drawing.entity");
const bom_entity_1 = require("../entity/bom.entity");
const typeorm_2 = require("typeorm");
let BomService = class BomService {
    constructor(bomRepository, bomDrawingRepository, dataSource) {
        this.bomRepository = bomRepository;
        this.bomDrawingRepository = bomDrawingRepository;
        this.dataSource = dataSource;
    }
    async create(createBomDto) {
        const bom = new bom_entity_1.Bom();
        bom.CNC = createBomDto.CNC;
        bom.T = createBomDto.T;
        bom.pi = createBomDto.pi;
        return await this.bomRepository.save(bom);
    }
    async findAll(modelId, type) {
        const boms = await this.dataSource.getRepository(bom_entity_1.Bom)
            .createQueryBuilder('bom')
            .leftJoin('bom.modelDetail', 'modelDetail')
            .addSelect('modelDetail.id')
            .addSelect('modelDetail.name')
            .leftJoin('bom.bomDrawing', 'bomDrawing')
            .addSelect('bomDrawing.fileName')
            .where('modelDetail.id = :id', { id: modelId })
            .andWhere('bom.type =:type', { type: type })
            .getMany();
        return boms;
    }
    async findAllG(modelId) {
        const boms = await this.dataSource.getRepository(bom_entity_1.Bom)
            .createQueryBuilder('bom')
            .leftJoin('bom.modelDetail', 'modelDetail')
            .leftJoin('bom.bomDrawing', 'bomDrawing')
            .addSelect('bomDrawing.fileName')
            .where('modelDetail.id = :id', { id: modelId })
            .andWhere('bom.type =:type', { type: 'g' })
            .getMany();
        return boms;
    }
    async findAllL(modelId) {
        const boms = await this.dataSource.getRepository(bom_entity_1.Bom)
            .createQueryBuilder('bom')
            .leftJoin('bom.modelDetail', 'modelDetail')
            .leftJoin('bom.bomDrawing', 'bomDrawing')
            .addSelect('bomDrawing.fileName')
            .where('modelDetail.id = :id', { id: modelId })
            .andWhere('bom.type =:type', { type: 'l' })
            .getMany();
        return boms;
    }
    async findOne(id) {
        const bom = await this.bomRepository.findOne({ where: { id: id } });
        return bom;
    }
    async update(id, updateBomDto) {
        const bom = await this.bomRepository.findOne({ where: { id: id } });
        bom.CNC = updateBomDto.CNC;
        bom.T = updateBomDto.T;
        bom.enrlgmnt = updateBomDto.enrlgmnt;
        bom.pi = updateBomDto.pi;
        bom.reduction = updateBomDto.reduction;
        bom.requirement = updateBomDto.requirement;
        bom.shorten = updateBomDto.shorten;
        bom.size = updateBomDto.size;
        const bomDrawing = await this.bomDrawingRepository.findOne({ where: { id: updateBomDto.bomDrawing.id } });
        bom.bomDrawing = bomDrawing;
        await this.bomRepository.save(bom);
        return bom;
    }
    async remove(id) {
        return `This action removes a #${id} bom`;
    }
};
BomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bom_entity_1.Bom)),
    __param(1, (0, typeorm_1.InjectRepository)(bom_drawing_entity_1.BomDrawing)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], BomService);
exports.BomService = BomService;
//# sourceMappingURL=bom.service.js.map