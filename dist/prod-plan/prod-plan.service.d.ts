import { ModelDetail } from 'src/entity/modelDetail.entity';
import { ProdPlan } from 'src/entity/prod-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';
export declare class ProdPlanService {
    private prodPlanRepository;
    private modelDetailRepository;
    private dataSource;
    constructor(prodPlanRepository: Repository<ProdPlan>, modelDetailRepository: Repository<ModelDetail>, dataSource: DataSource);
    create(createProdPlanDto: CreateProdPlanDto): Promise<ProdPlan>;
    findAll(): Promise<ProdPlan[]>;
    findAllDone(page: number): Promise<ProdPlan[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateProdPlanDto: UpdateProdPlanDto): Promise<ProdPlan>;
    remove(id: number): Promise<ProdPlan[]>;
}
