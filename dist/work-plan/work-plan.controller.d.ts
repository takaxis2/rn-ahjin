import { WorkPlanService } from './work-plan.service';
import { CreateWorkPlanDto } from './dto/create-work-plan.dto';
import { UpdateWorkPlanDto } from './dto/update-work-plan.dto';
export declare class WorkPlanController {
    private readonly workPlanService;
    constructor(workPlanService: WorkPlanService);
    create(createWorkPlanDto: CreateWorkPlanDto): Promise<import("../entity/work-plan.entity").WorkPlan>;
    findAll(): Promise<import("../entity/work-plan.entity").WorkPlan[]>;
    findAllDone(page: string): Promise<import("../entity/work-plan.entity").WorkPlan[]>;
    findOne(id: string): Promise<import("../entity/work-plan.entity").WorkPlan>;
    update(id: string, updateWorkPlanDto: UpdateWorkPlanDto): Promise<import("../entity/work-plan.entity").WorkPlan>;
    remove(id: string): Promise<import("../entity/work-plan.entity").WorkPlan>;
}
