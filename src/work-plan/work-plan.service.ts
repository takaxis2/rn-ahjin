import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bom } from 'src/entity/bom.entity';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateWorkPlanDto } from './dto/create-work-plan.dto';
import { UpdateWorkPlanDto } from './dto/update-work-plan.dto';

@Injectable()
export class WorkPlanService {

  constructor(
     @InjectRepository(WorkPlan) private workPlanRepository: Repository<WorkPlan>,
     @InjectRepository(Bom) private bomRepository: Repository<Bom>,
    private dataSource: DataSource
    ){};

  async create(createWorkPlanDto: CreateWorkPlanDto) {

    const bom = await this.bomRepository.findOne({where:{id:createWorkPlanDto.bomId}});
    
    const workPlan = new WorkPlan();
    workPlan.EA = createWorkPlanDto.EA;
    workPlan.bom = bom;
    workPlan.done= false;

    const result = await this.workPlanRepository.save(workPlan);

    return result;
  }

  async findAll() {
    const workPlans = await this.dataSource.getRepository(WorkPlan)
    .createQueryBuilder('work-plan')
    .innerJoinAndSelect('work-plan.bom','bom')
    .where('work-plan.done = :done',{done:false})
    .getMany();
    

    return workPlans;
  }
  
  async findAllDone(page: number = 0){
    const workPlans = await this.dataSource.getRepository(WorkPlan)
    .createQueryBuilder('work-plan')
    .innerJoinAndSelect('work-plan.bom','bom')
    .where('work-plan.done = :done',{done:true})
    .skip(page*10)
    .take(10)
    .getMany();
    

    return workPlans;
  }

  async findOne(id: number) {

    const workPlan = await this.workPlanRepository.findOne({where:{id:id}});

    return workPlan;
  }

  async update(id: number, updateWorkPlanDto: UpdateWorkPlanDto) {
    const workPlan = await this.workPlanRepository.findOne({where:{id:id}});
    workPlan.done= true;
    await this.workPlanRepository.save(workPlan);

    return workPlan;
  }

  async remove(id: number) {
    const workPlan = await this.workPlanRepository.findOne({where:{id:id}});
    await this.workPlanRepository.remove(workPlan);
    return workPlan;
  }
}
