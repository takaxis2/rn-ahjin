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
exports.ProdPlanController = void 0;
const common_1 = require("@nestjs/common");
const prod_plan_service_1 = require("./prod-plan.service");
const create_prod_plan_dto_1 = require("./dto/create-prod-plan.dto");
const update_prod_plan_dto_1 = require("./dto/update-prod-plan.dto");
let ProdPlanController = class ProdPlanController {
    constructor(prodPlanService) {
        this.prodPlanService = prodPlanService;
    }
    async create(createProdPlanDto) {
        console.log(createProdPlanDto);
        return await this.prodPlanService.create(createProdPlanDto);
    }
    async findAll() {
        return await this.prodPlanService.findAll();
    }
    async findAllDone(page) {
        return await this.prodPlanService.findAllDone(+page);
    }
    async findOne(id) {
        return await this.prodPlanService.findOne(+id);
    }
    async update(id, updateProdPlanDto) {
        return await this.prodPlanService.update(+id, updateProdPlanDto);
    }
    async remove(id) {
        return await this.prodPlanService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prod_plan_dto_1.CreateProdPlanDto]),
    __metadata("design:returntype", Promise)
], ProdPlanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdPlanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':num/done'),
    __param(0, (0, common_1.Param)('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdPlanController.prototype, "findAllDone", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdPlanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prod_plan_dto_1.UpdateProdPlanDto]),
    __metadata("design:returntype", Promise)
], ProdPlanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdPlanController.prototype, "remove", null);
ProdPlanController = __decorate([
    (0, common_1.Controller)('prod-plan'),
    __metadata("design:paramtypes", [prod_plan_service_1.ProdPlanService])
], ProdPlanController);
exports.ProdPlanController = ProdPlanController;
//# sourceMappingURL=prod-plan.controller.js.map