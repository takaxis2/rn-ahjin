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
exports.ModelDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Drawing_entity_1 = require("../entity/Drawing.entity");
const modelDetail_entity_1 = require("../entity/modelDetail.entity");
const typeorm_2 = require("typeorm");
let ModelDetailService = class ModelDetailService {
    constructor(modelDetailRepository, drawingRepository, dataSource) {
        this.modelDetailRepository = modelDetailRepository;
        this.drawingRepository = drawingRepository;
        this.dataSource = dataSource;
    }
    async create(createModelDetailDto) {
        const modelDetail = new modelDetail_entity_1.ModelDetail();
        modelDetail.name = createModelDetailDto.name;
        const result = await this.modelDetailRepository.save(modelDetail);
        return result;
    }
    async findAll(modelId) {
        const modelDetails = await this.dataSource
            .getRepository(modelDetail_entity_1.ModelDetail)
            .createQueryBuilder('model-detail')
            .select('model-detail.id')
            .addSelect('model-detail.name')
            .leftJoin('model-detail.model', 'model')
            .addSelect('model.id')
            .leftJoin('model-detail.drawing', 'drawing')
            .addSelect('drawing.id')
            .addSelect('drawing.fileName')
            .addSelect('drawing.modelDetailId')
            .where('model.id = :id', { id: modelId })
            .getMany();
        return modelDetails;
    }
    async findOne(id) {
        const bom = await this.modelDetailRepository.findOne({ where: { id: id } });
        return bom;
    }
    async update(id, updateModelDetailDto) {
        const modelDetail = await this.modelDetailRepository.findOne({
            where: { id: id },
        });
        modelDetail.name = updateModelDetailDto.name;
        modelDetail.drawing = await this.drawingRepository.findOne({ where: { id: updateModelDetailDto.drawing.id } });
        return await this.modelDetailRepository.save(modelDetail);
    }
    async remove(id) {
        return `This action removes a #${id} modelDetail`;
    }
};
ModelDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(modelDetail_entity_1.ModelDetail)),
    __param(1, (0, typeorm_1.InjectRepository)(Drawing_entity_1.Drawing)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], ModelDetailService);
exports.ModelDetailService = ModelDetailService;
//# sourceMappingURL=model-detail.service.js.map