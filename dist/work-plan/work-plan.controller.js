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
exports.WorkPlanController = void 0;
const common_1 = require("@nestjs/common");
const work_plan_service_1 = require("./work-plan.service");
const create_work_plan_dto_1 = require("./dto/create-work-plan.dto");
const update_work_plan_dto_1 = require("./dto/update-work-plan.dto");
let WorkPlanController = class WorkPlanController {
    constructor(workPlanService) {
        this.workPlanService = workPlanService;
    }
    async create(createWorkPlanDto) {
        console.log('create work-plan');
        return await this.workPlanService.create(createWorkPlanDto);
    }
    async findAll() {
        return await this.workPlanService.findAll();
    }
    async findAllDone(page) {
        return await this.workPlanService.findAllDone(+page);
    }
    async findOne(id) {
        return await this.workPlanService.findOne(+id);
    }
    async update(id, updateWorkPlanDto) {
        return await this.workPlanService.update(+id, updateWorkPlanDto);
    }
    async remove(id) {
        return await this.workPlanService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_work_plan_dto_1.CreateWorkPlanDto]),
    __metadata("design:returntype", Promise)
], WorkPlanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkPlanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':page/done'),
    __param(0, (0, common_1.Param)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkPlanController.prototype, "findAllDone", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkPlanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_work_plan_dto_1.UpdateWorkPlanDto]),
    __metadata("design:returntype", Promise)
], WorkPlanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkPlanController.prototype, "remove", null);
WorkPlanController = __decorate([
    (0, common_1.Controller)('work-plan'),
    __metadata("design:paramtypes", [work_plan_service_1.WorkPlanService])
], WorkPlanController);
exports.WorkPlanController = WorkPlanController;
//# sourceMappingURL=work-plan.controller.js.map