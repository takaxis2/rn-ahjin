import { ProdPlanService } from './prod-plan.service';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';
export declare class ProdPlanController {
    private readonly prodPlanService;
    constructor(prodPlanService: ProdPlanService);
    create(createProdPlanDto: CreateProdPlanDto): Promise<import("../entity/prod-plan.entity").ProdPlan>;
    findAll(): Promise<import("../entity/prod-plan.entity").ProdPlan[]>;
    findAllDone(page: string): Promise<import("../entity/prod-plan.entity").ProdPlan[]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateProdPlanDto: UpdateProdPlanDto): Promise<import("../entity/prod-plan.entity").ProdPlan>;
    remove(id: string): Promise<import("../entity/prod-plan.entity").ProdPlan[]>;
}
