import { Bom } from 'src/entity/bom.entity';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateWorkPlanDto } from './dto/create-work-plan.dto';
import { UpdateWorkPlanDto } from './dto/update-work-plan.dto';
export declare class WorkPlanService {
    private workPlanRepository;
    private bomRepository;
    private dataSource;
    constructor(workPlanRepository: Repository<WorkPlan>, bomRepository: Repository<Bom>, dataSource: DataSource);
    create(createWorkPlanDto: CreateWorkPlanDto): Promise<WorkPlan>;
    findAll(): Promise<WorkPlan[]>;
    findAllDone(page?: number): Promise<WorkPlan[]>;
    findOne(id: number): Promise<WorkPlan>;
    update(id: number, updateWorkPlanDto: UpdateWorkPlanDto): Promise<WorkPlan>;
    remove(id: number): Promise<WorkPlan>;
}
