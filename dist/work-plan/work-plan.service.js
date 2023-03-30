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
exports.WorkPlanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bom_entity_1 = require("../entity/bom.entity");
const work_plan_entity_1 = require("../entity/work-plan.entity");
const typeorm_2 = require("typeorm");
let WorkPlanService = class WorkPlanService {
    constructor(workPlanRepository, bomRepository, dataSource) {
        this.workPlanRepository = workPlanRepository;
        this.bomRepository = bomRepository;
        this.dataSource = dataSource;
    }
    ;
    async create(createWorkPlanDto) {
        const bom = await this.bomRepository.findOne({ where: { id: createWorkPlanDto.bomId } });
        const workPlan = new work_plan_entity_1.WorkPlan();
        workPlan.EA = createWorkPlanDto.EA;
        workPlan.bom = bom;
        workPlan.done = false;
        const result = await this.workPlanRepository.save(workPlan);
        return result;
    }
    async findAll() {
        const workPlans = await this.dataSource.getRepository(work_plan_entity_1.WorkPlan)
            .createQueryBuilder('work-plan')
            .innerJoinAndSelect('work-plan.bom', 'bom')
            .where('work-plan.done = :done', { done: false })
            .getMany();
        return workPlans;
    }
    async findAllDone(page = 0) {
        const workPlans = await this.dataSource.getRepository(work_plan_entity_1.WorkPlan)
            .createQueryBuilder('work-plan')
            .innerJoinAndSelect('work-plan.bom', 'bom')
            .where('work-plan.done = :done', { done: true })
            .skip(page * 10)
            .take(10)
            .getMany();
        return workPlans;
    }
    async findOne(id) {
        const workPlan = await this.workPlanRepository.findOne({ where: { id: id } });
        return workPlan;
    }
    async update(id, updateWorkPlanDto) {
        const workPlan = await this.workPlanRepository.findOne({ where: { id: id } });
        workPlan.done = true;
        await this.workPlanRepository.save(workPlan);
        return workPlan;
    }
    async remove(id) {
        const workPlan = await this.workPlanRepository.findOne({ where: { id: id } });
        await this.workPlanRepository.remove(workPlan);
        return workPlan;
    }
};
WorkPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(work_plan_entity_1.WorkPlan)),
    __param(1, (0, typeorm_1.InjectRepository)(bom_entity_1.Bom)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], WorkPlanService);
exports.WorkPlanService = WorkPlanService;
//# sourceMappingURL=work-plan.service.js.map