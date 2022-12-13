import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModelDetail } from 'src/entity/modelDetail.entity';
import { ProdPlan } from 'src/entity/prod-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';

@Injectable()
export class ProdPlanService {
  constructor(
    @InjectRepository(ProdPlan) private prodPlanRepository: Repository<ProdPlan>,
    @InjectRepository(ModelDetail) private modelDetailRepository: Repository<ModelDetail>,
    private dataSource: DataSource
  ){}

  async create(createProdPlanDto: CreateProdPlanDto) {

    const modelDetail = await this.modelDetailRepository.findOne({where:{id: createProdPlanDto.modelId}});

    const prodPlan = new ProdPlan();
    prodPlan.EA = createProdPlanDto.EA;
    prodPlan.dueData = createProdPlanDto.dueData;
    prodPlan.modelDetail = modelDetail;
    prodPlan.done = false;
    
    const result = await this.prodPlanRepository.save(prodPlan);

    return result;
  }

  async findAll() {
    return `This action returns all prodPlan`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} prodPlan`;
  }

  async update(id: number, updateProdPlanDto: UpdateProdPlanDto) {
    return `This action updates a #${id} prodPlan`;
  }

  async remove(id: number) {
    return `This action removes a #${id} prodPlan`;
  }
}
