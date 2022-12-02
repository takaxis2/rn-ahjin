import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkPlan } from 'src/entity/work-plan.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateWorkPlanDto } from './dto/create-work-plan.dto';
import { UpdateWorkPlanDto } from './dto/update-work-plan.dto';

@Injectable()
export class WorkPlanService {

  constructor(
     @InjectRepository(WorkPlan) private workPlanRepository: Repository<WorkPlan>,
    private dataSource: DataSource
    ){};

  async create(createWorkPlanDto: CreateWorkPlanDto) {

    const workPlan =new WorkPlan();
    workPlan.EA = createWorkPlanDto.EA;

    // workPlan과 bom연결 시켜야함
    

    const result = await this.workPlanRepository.save(workPlan);

    return result;
  }

  async findAll() {
    const workPlans = await this.workPlanRepository.find();

    return workPlans;
  }

  async findOne(id: number) {

    const workPlan = await this.workPlanRepository.findOne({where:{id:id}});

    return workPlan;
  }

  async update(id: number, updateWorkPlanDto: UpdateWorkPlanDto) {
    return `This action updates a #${id} workPlan`;
  }

  async remove(id: number) {
    return `This action removes a #${id} workPlan`;
  }
}
