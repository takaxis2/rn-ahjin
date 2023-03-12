import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { skip } from 'rxjs';
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
    prodPlan.dueDate = createProdPlanDto.dueDate;
    prodPlan.modelDetail = modelDetail;
    prodPlan.done = false;
    
    const result = await this.prodPlanRepository.save(prodPlan);

    return result;
  }

  async findAll() {
    //done이 true인것만
    const prodPlans = await this.dataSource.getRepository(ProdPlan)
    .createQueryBuilder('prod-plan')
    .leftJoin('prod-plan.modelDetail','modelDetail')
    .addSelect('modelDetail.id')
    .addSelect('modelDetail.name')
    .where('prod-plan.done =:done',{done:false})
    .getMany();

    return prodPlans;
  }

  async findAllDone(page: number) {
    const prodPlans = await this.dataSource.getRepository(ProdPlan)
    .createQueryBuilder('prod-plan')
    .leftJoin('prod-plan.modelDetail','modelDetail')
    .addSelect('modelDetail.id')
    .addSelect('modelDetail.name')
    .where('prod-plan.done =:done',{done:true})
    .skip(page * 10)
    .take(10)
    .getMany();

    return prodPlans;
  }

  async findOne(id: number) {
    return `This action returns a #${id} prodPlan`;
  }

  async update(id: number, updateProdPlanDto: UpdateProdPlanDto) {
    //수정로직 false를 true로
    const prodPlan = await this.prodPlanRepository.findOne({where:{id:id}});
    prodPlan.done = true;
    
    return await this.prodPlanRepository.save(prodPlan);
  }

  async remove(id: number) {
    const prodPlan = await this.prodPlanRepository.find({where:{id:id}});
    const result = await this.prodPlanRepository.remove(prodPlan);

    return result;
  }
}
