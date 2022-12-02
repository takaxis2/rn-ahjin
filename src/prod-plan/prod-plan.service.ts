import { Injectable } from '@nestjs/common';
import { CreateProdPlanDto } from './dto/create-prod-plan.dto';
import { UpdateProdPlanDto } from './dto/update-prod-plan.dto';

@Injectable()
export class ProdPlanService {
  create(createProdPlanDto: CreateProdPlanDto) {
    return 'This action adds a new prodPlan';
  }

  findAll() {
    return `This action returns all prodPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prodPlan`;
  }

  update(id: number, updateProdPlanDto: UpdateProdPlanDto) {
    return `This action updates a #${id} prodPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodPlan`;
  }
}
