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
exports.ProdPlanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modelDetail_entity_1 = require("../entity/modelDetail.entity");
const prod_plan_entity_1 = require("../entity/prod-plan.entity");
const typeorm_2 = require("typeorm");
let ProdPlanService = class ProdPlanService {
    constructor(prodPlanRepository, modelDetailRepository, dataSource) {
        this.prodPlanRepository = prodPlanRepository;
        this.modelDetailRepository = modelDetailRepository;
        this.dataSource = dataSource;
    }
    async create(createProdPlanDto) {
        const modelDetail = await this.modelDetailRepository.findOne({ where: { id: createProdPlanDto.modelId } });
        const prodPlan = new prod_plan_entity_1.ProdPlan();
        prodPlan.EA = createProdPlanDto.EA;
        prodPlan.dueDate = createProdPlanDto.dueDate;
        prodPlan.modelDetail = modelDetail;
        prodPlan.done = false;
        const result = await this.prodPlanRepository.save(prodPlan);
        return result;
    }
    async findAll() {
        const prodPlans = await this.dataSource.getRepository(prod_plan_entity_1.ProdPlan)
            .createQueryBuilder('prod-plan')
            .leftJoin('prod-plan.modelDetail', 'modelDetail')
            .addSelect('modelDetail.id')
            .addSelect('modelDetail.name')
            .where('prod-plan.done =:done', { done: false })
            .getMany();
        return prodPlans;
    }
    async findAllDone(page) {
        const prodPlans = await this.dataSource.getRepository(prod_plan_entity_1.ProdPlan)
            .createQueryBuilder('prod-plan')
            .leftJoin('prod-plan.modelDetail', 'modelDetail')
            .addSelect('modelDetail.id')
            .addSelect('modelDetail.name')
            .where('prod-plan.done =:done', { done: true })
            .skip(page * 10)
            .take(10)
            .getMany();
        return prodPlans;
    }
    async findOne(id) {
        return `This action returns a #${id} prodPlan`;
    }
    async update(id, updateProdPlanDto) {
        const prodPlan = await this.prodPlanRepository.findOne({ where: { id: id } });
        prodPlan.done = true;
        return await this.prodPlanRepository.save(prodPlan);
    }
    async remove(id) {
        const prodPlan = await this.prodPlanRepository.find({ where: { id: id } });
        const result = await this.prodPlanRepository.remove(prodPlan);
        return result;
    }
};
ProdPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prod_plan_entity_1.ProdPlan)),
    __param(1, (0, typeorm_1.InjectRepository)(modelDetail_entity_1.ModelDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], ProdPlanService);
exports.ProdPlanService = ProdPlanService;
//# sourceMappingURL=prod-plan.service.js.map